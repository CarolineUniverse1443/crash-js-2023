//first version
// function calculateAge(date)
// {
// 	return (new Date()).getFullYear() - date.getFullYear();
// }

//second version
const calculateAge = (date) => (new Date()).getFullYear() - date.getFullYear();

const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);

console.log(age);

function getDateDifferenceLong(firstDate, secondDate)
{
	const differenceInMs = secondDate.getTime() - firstDate.getTime();

	const differenceInDays = Math.floor(differenceInMs/1000/86400);

	return differenceInDays;
}

const getDateDifference = (date1, date2) => Math.floor((date2.getTime() - date1.getTime()) / 86_400_000);

const date1 = new Date('2027-06-01');
const date2 = new Date('2027-06-10');
const difference = getDateDifference(date1, date2);
console.log(difference);