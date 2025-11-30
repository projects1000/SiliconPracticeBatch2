import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from '../service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  removeNotification(id: number) {
    this.notificationService.remove(id);
  }

  getNotificationIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'success': '✅',
      'error': '❌',
      'warning': '⚠️',
      'info': 'ℹ️',
      'employee-delete': '🗑️' // Added employee-delete icon
    };
    return icons[type] || '💡';
  }
}