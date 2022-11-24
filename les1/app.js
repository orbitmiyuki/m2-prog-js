class App
{
    runApplication()
    {
        console.log("hello world!");
        let appNaam = "random app";
        let versienummer = "v1.0";
        let versiedatum = "24 november 2022";
        let autheur = "made by gio";
        let copyright = "no copyright for now lol";
        let distributeur = "the distributor is also me i think";
        let darkmode = true;
        console.log(appNaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();