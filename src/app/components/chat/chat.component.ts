import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import pusherJs from 'pusher-js';
import { UserChat } from 'src/models/user-chat.model';

declare var $: any;

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

	usuarioChat: UserChat;

	constructor(private http: HttpClient) {
		this.usuarioChat = new UserChat();
	}

	ngOnInit(): void {
		const pusher = new pusherJs('046dc7e3fcec66e13ed9', {
			cluster: 'mt1'
		});

		const channel = pusher.subscribe('chat');
		channel.bind('message', (data: any) => {
			this.usuarioChat.messages.push(data);
		});

		$('.chat-bubble').click(function(){
			$('.chat-box').toggleClass('hide');
			$('.chat-bubble').toggleClass('chat-bubble-hover');
		});
	}

	submit(): void {
		if (this.usuarioChat.message !== ''){
			this.http.post('http://localhost:8000/api/messages', {
				username: this.usuarioChat.username,
				message: this.usuarioChat.message
			}).subscribe({
				next: () => this.usuarioChat.message = '',
				error: (err) => console.error(err)
			});
		}
	}
}
