//The global variable.
let weatherAll;

//When DOM loads, invoke the six functions below.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    weatherAll.weatherCt();
    weatherAll.weatherMe();
    weatherAll.weatherMa();
    weatherAll.weatherNh();
    weatherAll.weatherRi();
    weatherAll.weatherVt();
});

//The weatherAll object
weatherAll = {

    //Function for Connecticut weather
    weatherCt: function () {
        "use strict";

        //Placeholders: Connecticut temperature in Fahrenheit to Celsius.
        const tempCtF = document.getElementById("temp-ct-f");
        const tempCtC = document.getElementById("temp-ct-c");

        //NOAA URL - weather in Hartford, Connecticut
        const urlCt = "http://w1.weather.gov/xml/current_obs/KHFD.xml";

        //Iniatiate the XML request. True is Asynchronous Request.
        const requestCt = new XMLHttpRequest();
        requestCt.open("GET", urlCt, true);

        //Specify the file type being requested.
        requestCt.responseType = "xml";

        //When "request" loads, assign response to placeholders.
        requestCt.addEventListener("load", function () {

            if (requestCt.status === 200) {
                const resultCtF = requestCt.responseXML.querySelector("temp_f");
                tempCtF.textContent = resultCtF.textContent;

                const resultCtC = requestCt.responseXML.querySelector("temp_c");
                tempCtC.textContent = resultCtC.textContent;
            } else {
                window.alert("Data for Connecticut unavailable now.");
            }

        });

        //invoke the request (it won"t run automatically)
        requestCt.send();
    },

    //Function for Maine weather
    weatherMe: function () {
        "use strict";

        //Placeholders: Maine temperature in Fahrenheit to Celsius.
        const tempMeF = document.getElementById("temp-me-f");
        const tempMeC = document.getElementById("temp-me-c");

        //NOAA URL - weather in Augusta, Maine
        const urlMe = "http://w1.weather.gov/xml/current_obs/KAUG.xml";

        //Iniatiate the XML request. True is Asynchronous Request.
        const requestMe = new XMLHttpRequest();
        requestMe.open("GET", urlMe, true);

        //Specify the file type being requested.
        requestMe.responseType = "xml";

        //When "request" loads, assign response to placeholders.
        requestMe.addEventListener("load", function () {

            if (requestMe.status === 200) {
                const resultMeF = requestMe.responseXML.querySelector("temp_f");
                tempMeF.textContent = resultMeF.textContent;

                const resultMeC = requestMe.responseXML.querySelector("temp_c");
                tempMeC.textContent = resultMeC.textContent;
            } else {
                window.alert("Data for Maine unavailable now.");
            }

        });

        //invoke the request (it won"t run automatically)
        requestMe.send();
    },

    //Function for Massachusetts weather
    weatherMa: function () {
        "use strict";

        //Placeholders: Massachusetts temperature in Fahrenheit to Celsius.
        const tempMaF = document.getElementById("temp-ma-f");
        const tempMaC = document.getElementById("temp-ma-c");

        //NOAA URL - weather in Boston, Massachusetts
        const urlMa = "http://w1.weather.gov/xml/current_obs/KBOS.xml";

        //Iniatiate the XML request. True is Asynchronous Request.
        const requestMa = new XMLHttpRequest();
        requestMa.open("GET", urlMa, true);

        //Specify the file type being requested.
        requestMa.responseType = "xml";

        //When "request" loads, assign response to placeholders.
        requestMa.addEventListener("load", function () {

            if (requestMa.status === 200) {
                const resultMaF = requestMa.responseXML.querySelector("temp_f");
                tempMaF.textContent = resultMaF.textContent;

                const resultMaC = requestMa.responseXML.querySelector("temp_c");
                tempMaC.textContent = resultMaC.textContent;
            } else {
                window.alert("Data for Massachusetts unavailable now.");
            }

        });

        //invoke the request (it won"t run automatically)
        requestMa.send();
    },

    //Function for New Hampshire weather
    weatherNh: function () {
        "use strict";

        //Placeholders: New Hampshire temperature in Fahrenheit to Celsius.
        const tempNhF = document.getElementById("temp-nh-f");
        const tempNhC = document.getElementById("temp-nh-c");

        //NOAA URL - weather in Concord, New Hampshire
        const urlNh = "http://w1.weather.gov/xml/current_obs/KCON.xml";

        //Iniatiate the XML request. True is Asynchronous Request.
        const requestNh = new XMLHttpRequest();
        requestNh.open("GET", urlNh, true);

        //Specify the file type being requested.
        requestNh.responseType = "xml";

        //When "request" loads, assign response to placeholders.
        requestNh.addEventListener("load", function () {

            if (requestNh.status === 200) {
                const resultNhF = requestNh.responseXML.querySelector("temp_f");
                tempNhF.textContent = resultNhF.textContent;

                const resultNhC = requestNh.responseXML.querySelector("temp_c");
                tempNhC.textContent = resultNhC.textContent;
            } else {
                window.alert("Data for New Hanpshire unavailable now.");
            }

        });

        //invoke the request (it won"t run automatically)
        requestNh.send();
    },

    //Function for Rhode Island weather
    weatherRi: function () {
        "use strict";

        //Placeholders: Rhode Island temperature in Fahrenheit to Celsius.
        const tempRiF = document.getElementById("temp-ri-f");
        const tempRiC = document.getElementById("temp-ri-c");

        //NOAA URL - weather in Providence, Rhode Island
        const urlRi = "http://w1.weather.gov/xml/current_obs/KPVD.xml";

        //Iniatiate the XML request. True is Asynchronous Request.
        const requestRi = new XMLHttpRequest();
        requestRi.open("GET", urlRi, true);

        //Specify the file type being requested.
        requestRi.responseType = "xml";

        //When "request" loads, assign response to placeholders.
        requestRi.addEventListener("load", function () {

            if (requestRi.status === 200) {
                const resultRiF = requestRi.responseXML.querySelector("temp_f");
                tempRiF.textContent = resultRiF.textContent;

                const resultRiC = requestRi.responseXML.querySelector("temp_c");
                tempRiC.textContent = resultRiC.textContent;
            } else {
                window.alert("Data for Rhode Island unavailable now.");
            }

        });

        //invoke the request (it won"t run automatically)
        requestRi.send();
    },

    //Function for Vermont weather
    weatherVt: function () {
        "use strict";

        //Placeholders: Vermont temperature in Fahrenheit to Celsius.
        const tempVtF = document.getElementById("temp-vt-f");
        const tempVtC = document.getElementById("temp-vt-c");

        //NOAA URL - weather in Montpelier, Vermont
        const urlVt = "http://w1.weather.gov/xml/current_obs/KMPV.xml";

        //Iniatiate the XML request. True is Asynchronous Request.
        const requestVt = new XMLHttpRequest();
        requestVt.open("GET", urlVt, true);

        //Specify the file type being requested.
        requestVt.responseType = "xml";

        //When "request" loads, assign response to placeholders.
        requestVt.addEventListener("load", function () {

            if (requestVt.status === 200) {
                const resultVtF = requestVt.responseXML.querySelector("temp_f");
                tempVtF.textContent = resultVtF.textContent;

                const resultVtC = requestVt.responseXML.querySelector("temp_c");
                tempVtC.textContent = resultVtC.textContent;
            } else {
                window.alert("Data for Vermont unavailable now.");
            }

        });

        //invoke the request (it won"t run automatically)
        requestVt.send();
    }

}; //close weatherAll