function setUpEvents()
{

           function validateForm(event) {
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password_confirm').value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#]).{8,}$/;
        
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one special character (e.g., @, _).');
            event.preventDefault(); // Prevent form submission
            return false;
        }
        
        if (password !== passwordConfirm) {
            alert('Passwords do not match. Please try again.');
            event.preventDefault(); // Prevent form submission
            return false;
        }
        alert('Form submitted successfully!');
        return true; // Allow form submission
    }
    
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelector('form').addEventListener('submit', validateForm);
    });
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }

/*
    //primitives 

    scoreOne = 100;
    scoreTwo = scoreOne;

    console.log('scoreOne: ' + scoreOne, 'scoreTwo: ' + scoreTwo);

    scoreOne = 98;

    console.log('scoreOne: ' + scoreOne, 'scoreTwo: ' + scoreTwo);

    //references

    let nameOne = 'Debruyne';
    let nameTwo = nameOne;

    console.log(`nameOne: ${nameOne}`,`nameTwo: ${nameTwo}`);

    nameOne = 'Zyro';

    console.log(`nameOne: ${nameOne}`,`nameTwo: ${nameTwo}`);

    //conditional statements
    //1.if , else if and else statements
    let g = 24;

    if(g >= 30 )
        {
            console.log('You are a mature adult');
        }
        else if (g < 30 && g >= 20  )
        {
            console.log('You are a young adult');
        }
        else if (g >= 13 && g< 20)
            {
                console.log('You are a teenager');
            }
            else
            {
                console.log('You are a child');
            }
            
    //2.switch statements

    let grade = 'B';

    switch(grade)
    {
        case 'A':
            console.log('Excellent');
            break;
        case 'B':
            console.log('Good');
            break;
        case 'C':
            console.log('Average');
            break;
        case 'D':
            console.log('Poor');
            break;
        case 'F':
            console.log('Fail');
            break;
        default:
            console.log('Invalid Grade');
            break;
    }

    //3.For loop, break and continue
    let  players = ['Zyro', 'De Bruyne', 'Bale', 'Mbappe', 'Haaland'];
    for (let i = 0; i < players.length; i++) 
        {
            console.log('player:', players[i]);
        }
    let marks = [50,60,70,80,90,100];

    for (let i = 0; i < marks.length; i++)
        {
            console.log('mark:', marks[i]);

            if(marks == 80)
                {
                    console.log('You got an A');
                    break;
                }
                if (marks == 60)
                    {
                        console.log('You got a B');
                        continue;
                    }   
        }

    //4.while loop
    
    let c = 0;

    while(c<5)
        {
            console.log(c);
            c++;
        }

    //5.do while loop
    let b = 0;
     do{
        console.log(b);
            b++;
     }while(b < 7)

    //Functions

    //function declaration
    function zyroCareer()
    {
        console.log('Zyro has 826 career goals and 559 assist currently at the age of 31');
    }
    zyroCareer();
    //function expression
 
    let greet = function zyroMode() 
    {

        console.log('Zyro is the G.O.A.T of VR football');
    }
   greet();
    let great = careerMode =>
        {

            console.log('There is no greater player in career mode that i have ever seen than Zyro');
        }
    great();

    //Arrow functions
   
    const add = (products,tax) =>
        {

            let total = 0;

            for(let i = 0; i < products.length; i++){

            total+= products[i]+ products[i] * tax;
               return total;
            }
        };

        console.log(add([10,15,30],0.2));

        //methods

        let r = 'Ray';

        console.log(r.toUpperCase());
    //Math Object

    console.log(Math);

    let m = 7.7;

    console.log('Number:', m)
    console.log('Round:', Math.round(m));
    console.log('Floor:', Math.floor(m));
    console.log('Ceil:', Math.ceil(m));
    console.log('Sqrt:', Math.sqrt(m));
    console.log('Trunc:', Math.trunc(m));
    console.log('PI:', Math.PI);


    //objects

const x = 
{
name: 'Zyro',
current_age: 31,
club_goals: 782,
club_assists:543,
ucl_goals: 165,
ucl_assists:120,
national_goals: 44,
national_assists: 16,
total : function() 
    {
        console.log('Player Total Goals:', x.club_goals + x.national_goals); 
    }
};

console.log('Player Name:', x.name);
console.log('Player Age:', x.current_age);
console.log('Player Club goals:', x.club_goals);
console.log('Player Club assists:', x.club_assists);
console.log('Player UCL goals:', x.ucl_goals);
console.log('Player UCL assists:', x.ucl_assists);
console.log('Player National goals:', x.national_goals);
console.log('Player National assists:', x.national_assists);
x.total();
*/

}
window.onload = function(){
    setUpEvents();
};





