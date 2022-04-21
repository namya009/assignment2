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

INSERT or IGNORE INTO rtable VALUES (1, "Dam Pukt", "14 main street", "M1M1M1", "scarborough", "647-000-1521", "Best chinese food in toronto", 5);
INSERT or IGNORE INTO rtable VALUES (2, "Lucky Chinese Restaurant", "69 king st", "A3F5T8", "scarborough", "497-853-8561", "Best place to eat chinese", 2);
INSERT or IGNORE INTO rtable VALUES (3, "Mirch Masala", "263 Queen st e", "L6W4K6", "brampton", "456-789-1230", "indian authentic restaurent", 5);
INSERT or IGNORE INTO rtable VALUES (4, "D-Spot", "79 young st w", "N1N2N3", "toronto", "647-000-1521", "Want desert? Best here.", 3);
INSERT or IGNORE INTO rtable VALUES (5, "Pizza Pizza", "14 secound street", "M1M1M1", "toronto", "647-000-1521", "best pizza in town", 1);

-- remove all para if error
-- (id, rest_name,rest_address,rest_postal,rest_city,rest_phone,rest_description,rest_rating) 