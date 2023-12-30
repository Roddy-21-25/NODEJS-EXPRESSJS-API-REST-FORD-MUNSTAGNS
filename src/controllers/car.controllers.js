import { pool } from "../db.js";

export const home = (req, res) => {
  res.json({
    Hi: "This is the Ford Munstangs API (Here you have data of all the Ford Munstangs since 1962 until 2020 [ I will update, no worry :) ]), so, go to the endpoint: /getCars to see all the Cars. [ex: http://localhost:3000/api/getCars]",
    Message:
      "If you have anything to say or share to me: This is my email: [Roddy3889@gmail.com]",
    Add: "If you want to add a new field or you have data of a new model or a model that i forget to add. so, send me the name of this model to the email. I did not create a public endpoint to Post a new Field. so, only me can do :)",
  });
};

export const getCars = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM FordMunstangs");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getCarsById = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM FordMunstangs WHERE Id = ?",
      [req.params.id]
    );
    if (result.length < 1) {
      res.status(404).json({
        Error1:
          "This endpoint [http://localhost:3000/api/getCarsById/ID] Only acepts numbers, so, if you see this, put a number.",
        Error2: `Ok, you wrote a number but you are looking this error message, ok. this maybe, is because we dont have a Munstang with the id: ${req.params.id}`,
      });
      return;
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getCarsByYear = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM FordMunstangs WHERE ProductionYear = ?",
      [req.params.year]
    );
    if (result.length < 1) {
      res.status(404).json({
        Error1:
          "This endpoint [http://localhost:3000/api/getCarsByYear/YEAR] Only acepts numbers, so, if you see this, put a number.",
        Error2: `Ok, you wrote a number but you are looking this error message, ok. this maybe, is because we dont have a Munstang with the year: ${req.params.year}`,
      });
      return;
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getCarsByName = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM FordMunstangs WHERE name LIKE ?",
      [`%${req.params.name}%`]
    );
    if (result.length < 1) {
      res.status(404).json({
        Error1:
          "This endpoint [http://localhost:3000/api/getCarsByName/NAME] Only acepts strings, so, if you see this, put a strings.",
        Error2: `Ok, you wrote a strings but you are looking this error message, ok. this maybe, is because we dont have a Munstang with the text: ${req.params.name} in his name`,
      });
      return;
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
