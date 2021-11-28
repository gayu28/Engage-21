const tasksState = {
  tasks: [

    {


      
      id: 1,
      projectId: 1,
      title: 'Report making',
      members: [
        {
          name: 'Vignesh',
          photo:
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }
     
      ],
      progress: 0,
    },


    {



      id: 2,
      projectId: 1,
      title: 'Problem Statement finalize',
      members: [
        {
          name: 'Vignesh',
          photo:
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }
     
      ],
      progress: 15,
    },
    {
      id: 3,
      projectId: 1,
      title: 'Frontend implementation',
      members: [
        {
          name: 'Vignesh',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
       
      ],
      progress: 20,
    },
    {
      id: 4,
      projectId: 2,
      title: 'Literature Survey',
      members: [
        {
          name: 'Ann Smith',
          photo:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        }
        
      ],
      progress: 80,
    },
    {
      id: 5,
      projectId: 2,
      title: 'Conferences list',
      members: [
        {
          name: 'Shahid Joish',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        
      ],
      progress: 80,
    },
    
  ],
  selectedTask: {},
};

export default tasksState;
