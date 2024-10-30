import { CommonModule } from '@angular/common';
import { Component ,ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule ,FormsModule ],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {

  isChatboxOpen = false; // Initially closed
  userInput: string = '';
  messages: { text: string, isUser: boolean }[] = []; // Chat messages

  @ViewChild('chatbox') chatbox!: ElementRef;

  toggleChatbox() {
    this.isChatboxOpen = !this.isChatboxOpen;
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.addMessage(this.userInput, true); // Add user message
      this.userInput = ''; // Clear input

      // Simulate a bot response
      setTimeout(() => {
        this.addMessage("این یک پاسخ از سمت ربات است", false);
      }, 500);
    }
  }

  private addMessage(text: string, isUser: boolean) {
    this.messages.push({ text, isUser });
    this.scrollChatToBottom();
  }

  private scrollChatToBottom() {
    setTimeout(() => {
      if (this.chatbox) {
        this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
      }
    }, 100);
  }
}
