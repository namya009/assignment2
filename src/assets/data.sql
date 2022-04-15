CREATE TABLE IF NOT EXISTS rtable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rest_name TEXT,
    rest_address TEXT,
    rest_postal TEXT,
    rest_city TEXT,
    rest_phone TEXT,
    rest_description TEXT,
    rest_rating FLOAT
);

INSERT or IGNORE INTO rtable(id, rest_name,rest_address,rest_postal,rest_city,rest_phone,rest_description,rest_rating) VALUES (1, "dam pukt", "14 main street", "M1M1M1", "scarborough", "647-000-1521", "description", 5.0)