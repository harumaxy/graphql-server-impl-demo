-- Up Migration
CREATE TABLE
  users (id SERIAL PRIMARY KEY, NAME VARCHAR(255) NOT NULL);

CREATE TABLE
  follows (
    to_ INT NOT NULL REFERENCES users (id),
    from_ INT NOT NULL REFERENCES users (id),
    PRIMARY KEY (to_, from_)
  );

-- Down Migration
DROP TABLE follows;

DROP TABLE users;