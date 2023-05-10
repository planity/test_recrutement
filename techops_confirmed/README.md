## The problem

The problem consists in extracting the most recent records from a very large CSV file. Each records represents a user profile identified by a userid.
Each record contains a creation date which should be used to identify the most recent records.

Your implementation should be a NodeJS script with standard memory options. It should:
- Parse the entire file
- Extract user records identified by their user id
- Put the most recent records for each user in a JSON file with all associated properties

Each extracted record must be formatted as a JSON object using the CSV header line for property names.

## The input

The provided file `data.csv` contains all the records from which your script should extract user data.
The file is available at that link: https://drive.google.com/file/d/19_z4c9yeneEOKOsxixRQ6oBvSsn_Lqwb/view?usp=sharing

## The output

Your script should produce a file named `users.json` containing a JSON array with only the most recent records of all referenced users in the provided data.
The output JSON array must contain exactly _1517_ elements, each representing a unique user with the most recent data found in the file.
An element of the array should look like:

```json
{
    "uid": "6a670201-8168-4261-b43b-7b19f8c8af1b",
    "email": "Adalard_Robin27@yahoo.fr",
    "firstName": "Azalée",
    "lastName": "Aubert",
    "geo": {
        "lat": "16.3720",
        "lng": "145.8854"
    },
    "role": "Superviseur",
    "createdAt": "2023-06-16T06:27:49+02:00",
    "prop1": "Integrated intangible approach",
    "prop2": 15511,
    "prop3": "0xBA23248A39945D1e13e5",
    "prop4": "3afe014e-aaf7-4752-b34d-f831d41defb3"
}
```

You must provide your solution as a github repository.

## Dependencies

Your implementation should only use a date manipulation library and a utility library such as `lodash`.

## Evaluation

Our evaluation criteria are:

- the correctness of the algorithm
- the readability of the code (code structure, variables naming, comments,…)
