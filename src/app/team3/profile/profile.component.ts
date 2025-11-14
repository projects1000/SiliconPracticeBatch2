import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  memberName = '';
  member: any;

  // ✅ FIX: Allow string indexing
  members: { [key: string]: any } = {
    LOKESH: { name: "Lokesh", role: "Frontend Developer" },
    SUBHAM: { name: "Subham", role: "Backend Developer" },
    ASHUTOSH: { name: "Ashutosh", role: "Full Stack Developer" },
    TANISH: { name: "Tanish", role: "Tester" },
    NARAYAN: { name: "Narayan", role: "Team Lead" }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.memberName = this.route.snapshot.paramMap.get('name')!;
    this.member = this.members[this.memberName];  // Now no error
  }
}
