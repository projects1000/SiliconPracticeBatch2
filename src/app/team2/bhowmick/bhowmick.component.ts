import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  desc: string;
  link?: string;
}

@Component({
  selector: 'app-bhowmick',
  templateUrl: './bhowmick.component.html',
  styleUrls: ['./bhowmick.component.css']
})
export class BhowmickComponent implements OnInit {
  profile = {
    name: 'Bhowmick Das',
    role: 'Student · Developer',
    location: 'India',
    bio: `ECE | Interests:AI&ML, generative AI, computer vision, embedded systems (ESP32 / Raspberry Pi) `,
    skills: ['Langchain','Computer Vision','Django','FastAPI', 'Angular'],
    projects: [{ title: 'Posture Detection', desc: 'Headless Pi posture monitor',title1: "RAG Chatbot",
    desc1: "Gemini Powered AI document chatbot" }],
    contact: { email: '', github: '', linkedin: '' }
  };

  editMode = false;

  get projectsString(): string {
    try { return JSON.stringify(this.profile.projects, null, 2); }
    catch { return '[]'; }
  }
  set projectsString(val: string) {
    try { this.profile.projects = val ? JSON.parse(val) : []; }
    catch { /* ignore invalid JSON while editing */ }
  }

  constructor() {}

  ngOnInit(): void {
    try {
      const saved = localStorage.getItem('bhowmick_profile');
      if (saved) this.profile = { ...this.profile, ...(JSON.parse(saved) || {}) };
    } catch { /* ignore invalid saved data */ }
  }

  toggleEdit(): void { this.editMode = !this.editMode; }

  saveProfile(): void {
    try {
      localStorage.setItem('bhowmick_profile', JSON.stringify(this.profile));
      this.editMode = false;
      alert('Saved locally');
    } catch {
      alert('Save failed');
    }
  }

  downloadVCard(): void {
    const note = (this.profile.bio || '').replace(/\r?\n/g, ' ');
    const v = ['BEGIN:VCARD','VERSION:3.0', `FN:${this.profile.name}`, `TITLE:${this.profile.role}`, `NOTE:${note}`, 'END:VCARD'].join('\n');
    const blob = new Blob([v], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${this.profile.name.replace(/\s+/g,'_')}.vcf`; a.click();
    window.URL.revokeObjectURL(url);
  }

  onSkillsInput(event: Event): void {
    const val = (event.target as HTMLInputElement)?.value || '';
    this.profile.skills = val.split(',').map(s => s.trim()).filter(Boolean);
  }
}
