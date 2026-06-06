const fs = require("fs");
const stringSimilarity = require("string-similarity");
const colleges =
    JSON.parse(
        fs.readFileSync(
            "./src/data/indian-colleges.json",
            "utf-8"
        )
    );
const reviews =
    JSON.parse(
        fs.readFileSync(
            "./src/data/reviews.json",
            "utf-8"
        )
    );
// normalize names
function cleanName(name) {
    return name
        .toLowerCase()
        .replace(
            /\[.*?\]/g,
            ""
        )
        .replace(
            /[^a-z0-9]/g,
            ""
        );
} const updated =
    colleges.map(college => {
        let bestMatch = null;
        let highestScore = 0;
        reviews.forEach(review => {
            const score =
                stringSimilarity.compareTwoStrings(
                    cleanName(college.college_name),
                    cleanName(review.college_name)
                );
            if (score > highestScore) {
                highestScore = score;
                bestMatch = review;
            }
        });
        // only accept strong matches
        if (highestScore >= 0.55 && bestMatch) {
            return {
                ...college,
                rating:
                    bestMatch.rating,
                review_count:
                    bestMatch.review_count || 0,
                reviews:
                    bestMatch.reviews || [],
                match_score:
                    highestScore
            }
        }
        return {
            ...college,
            rating:
                college.rating || "N/A",
            review_count: 0,
            reviews: []
        }
    });
fs.writeFileSync(
    "./src/data/final-colleges.json",

    JSON.stringify(
        updated,
        null,
        2
    )
);
console.log(
    "Reviews merged successfully with fuzzy matching"
);