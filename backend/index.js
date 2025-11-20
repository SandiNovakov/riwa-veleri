const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: "student.veleri.hr",
    user: "riwa",
    password: "11",
    port: 3306,
    database: "riwa",
  });
  
app.use(express.urlencoded({ extended: true }));
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get("/api/knjige", (req, res) => {
  connection.query("SELECT * FROM knjiga", (err, results) => {
    //if (err) throw err;
    res.json(results);
  });
});

app.post("/api/rezerv_knjige", (req, res) => {
  const data = req.body;
  rezervacija = [['2025-10-30', null, data.id_knjiga, data.id_korisnik]]
  connection.query("INSERT INTO rezervacija (datum_rezervacije, datum_vracanja, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});


app.get("/api/knjige/slobodne", (req, res) => {
  connection.query(
    "SELECT * FROM knjiga WHERE status = 'slobodna'",
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get("/api/knjige/naslov", (req, res) => {
  const naslov = req.query.value;
  connection.query(
    "SELECT * FROM knjiga WHERE naslov = ?",
    [naslov],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get("/api/knjige/autor", (req, res) => {
  const autor = req.query.value;
  connection.query(
    "SELECT * FROM knjiga WHERE autor = ?",
    [autor],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get("/api/korisnici", (req, res) => {
  connection.query("SELECT * FROM korisnik", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/api/korisnci/korime", (req, res) => {
  const korime = req.query.value;
  connection.query(
    "SELECT * FROM korisnik WHERE korime = ?",
    [korime],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get("/api/rezervacije", (req, res) => {
  connection.query("SELECT * FROM rezervacija", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/api/rezervacije/detalji", (req, res) => {
  const query = `
    SELECT knj.*, rez.*, kor.*
    FROM knjiga knj
    JOIN rezervacija rez ON knj.id = rez.knjiga
    JOIN korisnik kor ON rez.korisnik = kor.id
  `;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/api/rezervacije/aktivne", (req, res) => {
  const query = `
    SELECT knj.*, rez.*, kor.*
    FROM knjiga knj
    JOIN rezervacija rez ON knj.id = rez.knjiga
    JOIN korisnik kor ON rez.korisnik = kor.id
    WHERE rez.datum_vracanja IS NULL
  `;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/api/korisnici/aktivni", (req, res) => {
  const query = `
    SELECT kor.*
    FROM korisnik kor
    WHERE EXISTS (
        SELECT 'x'
        FROM rezervacija rez
        WHERE rez.korisnik = kor.id
          AND rez.datum_rezervacije IS NOT NULL
          AND rez.datum_vracanja IS NULL
    )
  `;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
    console.log("Server running at port: " + port);
});