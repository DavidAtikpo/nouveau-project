<template>
  <div class="container">
    <h1>Messages</h1>
    <div>
      <h2>Users</h2>
      <ul class="user-list">
        <li v-for="user in users" :key="user._id" @click="toggleDropdown(user)">
          <img class="icon" :src="user.profilePhotoURL" alt="profile">{{ user.firstName }}
          <div v-if="selectedUser && selectedUser._id === user._id && showDropdown" class="dropdown1" @click.stop>
            <h3>{{ selectedUser.firstName }}</h3>
            <hr>
            <ul>
              <li v-for="msg in userMessages" :key="msg._id" :class="{'sent': msg.type === 'sent', 'received': msg.type === 'received'}">
                <div :class="{'message-content': true, 'sent-content': msg.type === 'sent', 'received-content': msg.type === 'received'}">
                  <strong>{{ msg.type === 'sent' ? 'You' : msg.sender_id.firstName }}:</strong> {{ msg.content }}
                </div>
              </li>
            </ul>
            <div class="message-input">
              <input type="text" placeholder="Ecrire votre message ici" v-model="content" @click.stop />
              <button @click="sendMessage" @click.stop>Send</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '@/config.js';

export default {
  data() {
    return {
      users: [],
      userMessages: [],
      content: '',
      selectedUser: null,
      showDropdown: false,
      currentUserId: localStorage.getItem('user_id')
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(`${API_BASE_URL}/admin/allusers`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        const mappedUsers = response.data.map(user => ({
          ...user,
          profilePhotoURL: `${API_BASE_URL}` + user.profilePhotoURL
        }));
        this.users = mappedUsers;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async fetchMessages(userId) {
      try {
        const response = await axios.get(`${API_BASE_URL}/message/messages/${userId}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        // Transform the messages to add a 'type' field
        const transformedMessages = response.data.map(msg => {
          if (msg.receiver_id._id === this.currentUserId) {
            return { ...msg, type: 'received' };
          } else if (msg.sender_id._id === this.currentUserId) {
            return { ...msg, type: 'sent' };
          }
          console.log('message data',response.data);
          return msg;
        });
        this.userMessages = transformedMessages;
        console.log('get message', this.userMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    },
    async sendMessage() {
      if (!this.selectedUser) {
        alert("Please select a user to send the message to.");
        return;
      }
      try {
        await axios.post(`${API_BASE_URL}/message/message`, {
          receiver_id: this.selectedUser._id,
          content: this.content
        }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        this.content = '';
        this.fetchMessages(this.selectedUser._id); // Refresh messages
      } catch (error) {
        console.error('Error sending message:', error);
      }
    },
    toggleDropdown(user) {
      if (this.selectedUser && this.selectedUser._id === user._id) {
        this.showDropdown = !this.showDropdown;
      } else {
        this.selectedUser = user;
        this.showDropdown = true;
        this.fetchMessages(user._id); // Fetch messages with the selected user
      }
    }
  }
};
</script>

<style>
/* General Styles */
.container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 100%;
  margin: auto;
}

h1, h2 {
  text-align: center;
  color: #333;
}

.user-list {
  list-style-type: none;
  padding: 0;
}

.user-list li {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.3s;
}

.user-list li:hover {
  background-color: #e0e0e0;
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

/* Dropdown Styles */
.dropdown1 {
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 90%;
  margin-top: 10px;
}

.dropdown1 h3 {
  margin-top: 0;
}

.dropdown1 hr {
  margin: 10px 0;
}

.dropdown1 ul {
  list-style-type: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown1 ul li {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.sent-content {
  text-align: right;
  color: green;
}

.received-content {
  text-align: left;
  color: blue;
}

.message-input {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.message-input input {
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
}

.message-input button {
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.message-input button:hover {
  background-color: #555;
}

/* Responsive Design */
@media only screen and (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .user-list li {
    flex-direction: column;
    align-items: flex-start;
  }

  .dropdown1 {
    width: 100%;
    margin-left: 0;
  }

  .message-input {
    flex-direction: column;
  }

  .message-input input {
    margin-bottom: 10px;
  }
}
</style>
