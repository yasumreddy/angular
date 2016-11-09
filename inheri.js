(
    function(){
        var user={};//object literal
        user.id=4;
        user.name="ayu";
        user.lname="yasum";
        function employee()
        {
            this.empId="";
            this.empFname="";
            this.empLname="";
            var ssn="756B759";
            }
        
        employee.country="India";//creting a static property static properies cant be seen like other properties cant be inherited
        console.log(employee);
        
        var manager=new employee();//creating an object
        manager.reportCount=0;
        manager.empId=1;
        manager.empFname="vijaya";
        manager.empLname="yasum";
       // manager.gender="fe";
        console.log(manager);
       
        var assitentManager= new employee();//creating an object of employee type that means it can inherite the properties of employee but it cant inherit manager properties i.e (report count)
        assitentManager.empId=2;
         assitentManager.empFname="sumi";
         assitentManager.empLname="yasum";
        //assitentManager.gender="male";
        assitentManager.reportiesCount=10;
        console.log(assitentManager);
        employee.prototype.gender="";
        
        var superUser= new Object(manager)//this will inherit the properties of employee as well as manager.here we r creating a new object of manager
        superUser.empId=3;
        superUser.empFname="mishi";
        superUser.empLname="yasum";
      //  superUser.gender="fe";
        superUser.r=11;
        console.log(superUser);
        
        var coust=new Object(user);//creating an instance using object literal
        console.log(coust);
        
  })();