let TaskStore = {
    rows: [
        {name: "Upcoming", 
        tasks: [ 
            {id: 0, description: "Test Task"},
            {id: 2, description: "Second Task"}
         ]},
        {name: "In Progress", tasks: []},
        {name: "Complete", tasks: []}
    ],
    subscribers: [],
    subscribe: function(callback){
        this.subscribers.push(callback);
    },
    updateSubcribers: function(){
        this.subscribers.forEach((callback) => {
            callback();
        })
    },
    addTask: function(addCommand) {
        let tmpTasks = this.rows[addCommand.row].tasks;
        this.rows[addCommand.row].tasks = [
            ...tmpTasks,
            {
                id: Math.floor(Math.random() * 1000000000),
                description: addCommand.description
            }
        ];
        
        this.updateSubcribers();
    },
    moveTask: function(moveCommand){
        let curRowTasks = this.rows[moveCommand.curRow].tasks;

        //get the task
        let task = curRowTasks.slice(moveCommand.task.index, moveCommand.task.index+1)[0]

        //remove from old row
        let filteredRow = curRowTasks.filter((task, index) => index !== moveCommand.task.index)

        //set the old row data to the new data
        this.rows[moveCommand.curRow].tasks = filteredRow;

        //add task to new row
        this.rows[moveCommand.newRow].tasks = [
            ...this.rows[moveCommand.newRow].tasks, task
        ]

        this.updateSubcribers();
    }
};

function AddCommand(row,description){
    this.row = row;
    this.description = description;
}

function MoveCommand(curRow, newRow, task){
    this.curRow = curRow;
    this.newRow = newRow;
    this.task = task;
}

export {TaskStore, AddCommand, MoveCommand};