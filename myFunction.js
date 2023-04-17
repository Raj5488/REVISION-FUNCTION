        // Functions

    function sayHello(){
        // console.log("Hello world");
        // console.log("Hello Again");
    }
    // calling function
    sayHello()
    // console.log("Something");
    sayHello()
    


    function addTwoNumbers (num1, num2){
        let result = num1 + num2
        return result
    }
    const total = addTwoNumbers(20 ,10);
    // console.log(total);

    function substractTwoNum(num1, num2){
        return num1 + num2;
    }
     let substract = substractTwoNum(50,40);
    // console.log(substract);



    //Rule 1   // how can i check is user Registraiton in any site

    // if we put the argument value then :-
    function RegistraitonUser(User){
        return User +' is Register at Pw skills'
    }
    let Result = RegistraitonUser("Jitu");
    // console.log(Result);
    
    
     // Rule 2
     // if we not put the argument value then console result will be given "Undefined"
        function RegistraitonUser(user){
            return user +"is Registra at Pw skills"
        }
        let final = RegistraitonUser();
        // console.log(final);        // we got answer "undefied"

        // Rule 3 
        // if we not put the parameter then we can try to think how can i handdle with the situation
        function RegistraitonUser(User){
            if(User===undefined){
                return "Please inter User Name";
            }
            return User +" is registration pw skills"
        }
        let Check = RegistraitonUser();
        // console.log(Check);



            // 2nd methods is appear

        function checkRegistration(User){
            if(! User){
                return "Please enter Your Name"
            }
            return User +" is Registraiton User"
        }
        let shortForm = checkRegistration();
        // console.log(shortForm);

        // if we put the argument with the value then value is default value chek
        function checkValue(Custumer = "Jitu"){
            return Custumer +  " is already Register User "
        }
        let values = checkValue();
        // console.log(values);






        // how can i add object value will be added on function syntex will be thre

        const user = {
            id:5488, name:"Jitu raj sharma", email:"jiturajsharma8093@gmail.com"
        }
        function addUser(obj){
            // console.log('A User Name ' + obj.name  + obj.email + " got an email id");
        }
        addUser(user)


        function addTwoNumbers (num1, num2){
            return num1 + num2;
        }
        let var1 = addTwoNumbers(20 ,65);
        // console.log(var1);

        const addTwoNumbers1= (num1, num2) =>{
            return num1 +num2;
        }
        let arrow = addTwoNumbers(64,46);
        console.log(arrow);

        //  if we have only one line code then we not need to use return.
        const addTwoNumber2 = (num1, num2) => num1 + num2;
        let var5 = addTwoNumber2(564,687);
        // console.log(var5);


        // how is not working "this" in arrwo function we know the syntex
        const addTwoNumber4 = () =>{
            console.log(this);
        }
        addTwoNumber4();

        function learning(){
            console.log(this);
        }
        learning()


