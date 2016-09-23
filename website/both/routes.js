Router.map(function(){
  this.route('titlePage', { 
    path: '/',
   
    waitOn: function(){         
      return []
    },
    data: function(){  
      return {}
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }
  })

  this.route('techPage', { 
    path: '/techPage',
    waitOn: function(){         
      return []
    },
    data: function(){  
      return {}
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }
  })

  this.route('dancePage', { 
    path: '/dancePage',
    waitOn: function(){         
      return []
    },
    data: function(){  
      return {}
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }
  })

  this.route('travelPage', { 
    path: '/travelPage',
    waitOn: function(){         
      return []
    },
    data: function(){  
      return {}
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }
  }) 
})