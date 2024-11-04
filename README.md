## GET /api/:month/:day

### Description

Retrieve a list of holidays matching the given month and day.

### Parameters

- **month**: The abbreviated month name (3 characters) to search for holidays (e.g. "Jan", "Feb", etc.)
- **day**: The day to search for holidays (1-31)

### Response

- **200 OK**: An object with the following properties:
  - **count**: The number of holidays found
  - **holidays**: An array of holiday objects matching the given month and day, each containing:
    - **date**: The date of the holiday in "Month Day" format (e.g. "Jan 6")
    - **weekday**: The day of the week when the holiday occurs
    - **holiday_name**: The name of the holiday
    - **description**: A brief description of the holiday

### Examples

#### Valid Request

`GET /api/Jul/04`

```json
{
  "count": 1,
  "holidays": [
    {
      "date": "July 4",
      "weekday": "Tuesday",
      "holiday_name": "Independence Day",
      "description": "The United States declared independence from Great Britain in 1776."
    }
  ]
}
```

#### Invalid Request

`GET /api/june/04`

```json
{
  "count": 0,
  "holidays": []
}
```

Created following this tuturial: https://www.frontend-devops.com/blog/build-deploy-a-vercel-api
