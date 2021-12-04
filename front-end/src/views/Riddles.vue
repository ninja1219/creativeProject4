<template>
  <div>
    <ul>
      <li v-for="item in allItems" :key="item.id" class="list">
        <label :class="{ item: true, completed: item.completed }">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <h3 v-show="item.completed">Answer: {{ item.answer }}</h3>
          <input type="checkbox" v-model="item.completed" @click="completeItem(item)" />
          <span class="checkmark"></span>
        </label>
        <button @click="deleteItem(item)" class="delete">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
      name: 'Riddles',
      data() {
        return {
          items: [],
          title: '',
          description: '',
          answer: '',
          show: 'all',
        }
      },
      created: function() {
        this.getItems();
      },
      computed: {
        allItems() {
          return this.items;
        },
      },
      methods: {
        async getItems() {
          try {
            const response = await axios.get("/api/items");
            this.items = response.data;
          } catch (error) {
            console.log(error);
          }
        },
        async addItem() {
          try {
            await axios.post("/api/items", {
              answer: this.answer,
              title: this.title,
              description: this.description,
              completed: false
            });
            this.answer = "";
            this.title = "";
            this.description = "";
            this.getItems();
          } catch (error) {
            console.log(error);
          }
        },
        async completeItem(item) {
          try {
            axios.put("/api/items/" + item.id, {
              answer: item.answer,
              title: item.title,
              description: item.description,
              completed: !item.completed,
            });
            this.getItems();
          } catch (error) {
            console.log(error);
          }
        },
        async deleteItem(item) {
          try {
            await axios.delete("/api/items/" + item.id);
            this.getItems();
          } catch (error) {
            console.log(error);
          }
        },
        showAll() {
          this.show = 'all';
        },
        showActive() {
          this.show = 'active';
        },
        showCompleted() {
          this.show = 'completed';
        },
        deleteCompleted() {
          this.items.forEach(item => {
            if (item.completed)
              this.deleteItem(item);
          });
        },
      }
    }
    </script>
    
    <style scoped>
    /* List */
    ul {
      list-style: none;
    }
    
    li {
      background: #fff;
      width: 500px;
      min-height: 40px;
      padding: 10px;
      margin-bottom: 10px;
      font-size: 1em;
      display: flex;
      align-items: center;
    }
    
    form button {
      margin-left: 40px;
      font-size: 20px;
    }
    
    .list h3 {
      font-size: 20px;
    }
    
    .list p {
      font-size: 15px;
    }
    
    .delete {
      display: none;
      margin-left: auto;
    }
    
    li:hover .delete {
      display: block;
    }
    
    label {
      width: 400px;
    }
    
    /* Form */
    input[type=checkbox] {
      transform: scale(1.5);
      margin-right: 10px;
    }
    
    input[type=text] {
      font-size: 1em;
    }
    
    button {
      font-family: 'Arvo';
      font-size: 1em;
    }
    
    /* Controls */
    .controls {
      margin-top: 20px;
    }
    
    /* Custom checkbox
    /* Customize the label (the container) */
    .item {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    /* Hide the browser's default checkbox */
    .item input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    
    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
    }
    
    /* On mouse-over, add a grey background color */
    .item:hover input~.checkmark {
      background-color: #ccc;
    }
    
    /* When the checkbox is checked, add a blue background */
    .item input:checked~.checkmark {
      background-color: #2196F3;
    }
    
    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    
    /* Show the checkmark when checked */
    .item input:checked~.checkmark:after {
      display: block;
    }
    
    /* Style the checkmark/indicator */
    .item .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
</style>