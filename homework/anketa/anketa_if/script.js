var firstName = prompt('Введите фамилию:')
var myName = prompt('Введите имя:')
var secondName = prompt('Введите отчество:')

var ageStr = prompt('Введите ваш возраст:');
while (true) {
	var age = parseInt(ageStr);
	if (!isNaN(age))
		break; // введено корректное число - выходим из цикла
	ageStr = prompt('Введите ваш возраст корректно:');
}

var ageDay = (age * 365);
var ageEar = (age + 5);

var gender = prompt('Введите пол (Мужской или Женский):'); {
	if (gender == 'Мужской')
		console.log('мужской');
	else
		console.log('Женский');
}



alert('Ваше ФИО: ' + firstName + ' ' + myName + ' ' + secondName + '\n ваш возраст в годах: ' + age + ' лет' + '\n' + 'Ваш возраст в днях: ' + ageDay + ' дней' + '\n' + 'Ваш возраст через 5 лет: ' + ageEar + ' лет' + '\n' + 'Ваш пол: ' + gender + ' ')
