var x = document.getElementById("id01");

function clearValue() {
	x.innerHTML = "The output will appear here.";
	document.getElementById("input1").value = "";
	document.getElementById("input2").value = "";
}

function calculateZodiac() {
	var month = (document.getElementById("input1").value).toLowerCase();
	var day = Number(document.getElementById("input2").value);
	var birthDay = `${month} ${day}`;
	
	if (month == "march" && day > 20 && day < 32 || month=="april" && day > 0 && day < 20) {
		x.innerHTML = `You are an Aries.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-aries.png"/>`;
	}
	
	else if (month == "april" && day > 19 && day < 32 || month=="may" && day > 0 && day < 21) {
		x.innerHTML = `You are a Taurus.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-taurus.png"/>`;
	}
	
	else if (month == "may" && day > 20 && day < 32 || month=="june" && day > 0 && day < 21) {
		x.innerHTML = `You are a Gemini.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-gemini.png"/>`;
	}
	
	else if (month == "june" && day > 20 && day < 32 || month=="july" && day > 0 && day < 23) {
		x.innerHTML = `You are a Cancer.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-cancer.png"/>`;
	}
	
	else if (month == "july" && day > 22 && day < 32 || month=="august" && day > 0 && day < 23) {
		x.innerHTML = `You are a Leo.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-leo.png"/>`;
	}
	
	else if (month == "august" && day > 22 && day < 32 || month=="september" && day > 0 && day < 23) {
		x.innerHTML = `You are a Virgo.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-virgo.png"/>`;
	}
	
	else if (month == "september" && day > 22 && day < 32 || month=="october" && day > 0 && day < 23) {
		x.innerHTML = `You are a Libra.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-libra.png"/>`;
	}
	
	else if (month == "october" && day > 22 && day < 32 || month=="november" && day > 0 && day < 22) {
		x.innerHTML = `You are a Scorpio.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-scorpio.png"/>`;
	}
	
	else if (month == "november" && day > 21 && day < 32 || month=="december" && day > 0 && day < 22) {
		x.innerHTML = `You are a Sagittarius.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-sagittarius.png"/>`;
	}
	
	else if (month == "decemeber" && day > 21 && day < 32 || month=="january" && day > 0 && day < 20) {
		x.innerHTML = `You are a Capricorn.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-capricorn.png"/>`;
	}
	
	else if ((month == "january" && day > 19 && day < 32) || (month=="february" && day > 0 && day < 19)) {
		x.innerHTML = `You are an Aquarius.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-aquarius.png"/>`;
	}
	
	else if ((month == "february" && day > 17 && day < 32) || (month=="march" && day > 0 && day < 21)) {
		x.innerHTML = `You are a Pisces.<br><br><img src="https://www.horoscope.com/images-US/signs/profile-Pisces.png"/>`;
	}
	
	else {
		x.innerHTML = `You entered ${birthDay}, which is an INVALID INPUT`;
	}
}
