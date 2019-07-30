// Ex1:Find earliest date a user joined
// ex. earliest_date: May 2nd 2016
SELECT 
	DATE_FORMAT(MIN(created_at), "%M %D %Y") AS earliest_date
	FROM users;

// Find Email of the first (earliest) user
SELECT 
	*
	FROM users
	WHERE created_at = (SELECT MIN(created_at) FROM users);

// Users according to the month they joined (month-count)
SELECT 
	MONTHNAME(created_at) as month,
	COUNT(*) as count
FROM users GROUP BY month
ORDER BY count DESC;

// Count number of users with yahoo emails
SELECT 
	COUNT(*) as yahoo_users 
	FROM users
	WHERE email LIKE '%yahoo.com';

// Calculate total number of users for each email host
SELECT 
	CASE
		WHEN email LIKE '%@gmail.com' THEN 'gmail'
		WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
		WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
		ELSE 'other'
	END AS provider.
	COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;