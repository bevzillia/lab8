const employee = {
    position: '',
    name: '',
    lastName: '',
    baseSalary: 0,
    experience: 0,
    countedSalary: 0,
    countBaseSalary : function () {
        if (this.experience >= 5){
            this.countedSalary = this.baseSalary * 1.2 + 500
        } else if (this.experience >= 2){
            this.countedSalary = this.baseSalary + 200
        } else {
            this.countedSalary = this.baseSalary
        }
    }
}

const developer = {
    __proto__: employee,
    countSalary: function(){
        this.countBaseSalary();
    }
}

const designer = {
    __proto__: employee,
    effCoeff: 1,
    countSalary: function(){
        this.countBaseSalary();

        this.countedSalary = this.baseSalary * this.effCoeff
    }
}

const manager = {
    __proto__: employee,
    team: [],
    countSalary: function(){
        this.countBaseSalary();

        if(this.team.length >= 10) {
            this.countedSalary = this.baseSalary + 300
        } else if(this.team.length >= 5) {
            this.countedSalary = this.baseSalary + 200
        } else {
            this.countedSalary = this.baseSalary
        }
    }
}

const department = {
    managers: [],
    totalSalary: 0,
    giveSalary: function(){
        const total = this.managers.reduce((acc, manager) => {
            manager.countSalary();
            const selfSalary = manager.countedSalary;

            const teamSalary = manager.team.reduce((acc, employee) => {
                employee.countSalary();

                return acc + employee.countedSalary;
            }, 0)

            return acc + selfSalary + teamSalary;
        }, 0)

        this.totalSalary = total;
    }
}

const google = {
    __proto__: department,
    managers: [
        {
            __proto__: manager,
            position: 'manager',
            name: 'Lisa',
            lastName: 'Dou',
            experience: 5,
            baseSalary: 800,
            team: [
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 2,
                    baseSalary: 1200,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 5,
                    baseSalary: 4000,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 12,
                    baseSalary: 5600,
                },
                {
                    __proto__: designer,
                    position: 'designer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 3,
                    baseSalary: 1000,
                    effCoeff: 0.4
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 2,
                    baseSalary: 1200,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 5,
                    baseSalary: 4000,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 12,
                    baseSalary: 5600,
                },
                {
                    __proto__: designer,
                    position: 'designer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 3,
                    baseSalary: 1900,
                    effCoeff: 0.6

                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 2,
                    baseSalary: 1200,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 5,
                    baseSalary: 4000,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 12,
                    baseSalary: 5600,
                },
                {
                    __proto__: designer,
                    position: 'designer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 3,
                    baseSalary: 1700,
                    effCoeff: 0.9

                }
            ]
           
        },
        {
            __proto__: manager,
            position: 'manager',
            name: 'Lisa',
            lastName: 'Dou',
            experience: 5,
            baseSalary: 800,
            team: [
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 2,
                    baseSalary: 1200,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 5,
                    baseSalary: 4000,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 12,
                    baseSalary: 5600,
                },
                {
                    __proto__: designer,
                    position: 'designer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 3,
                    baseSalary: 1300,
                    effCoeff: 0.6
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 2,
                    baseSalary: 1200,
                }
            ]
        },
        {
            __proto__: manager,
            position: 'manager',
            name: 'Lisa',
            lastName: 'Dou',
            experience: 5,
            baseSalary: 800,
            team: [
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 1,
                    baseSalary: 400,
                },
                {
                    __proto__: developer,
                    position: 'developer',
                    name: 'John',
                    lastName: 'Dou',
                    experience: 3,
                    baseSalary: 2000,
                }
            ]
        }
    ]
}

google.giveSalary();
console.log('total', google.totalSalary)