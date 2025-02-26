---
title: "👑 Total Supply Chart by ID"
slug: "coins-id-total-supply-chart"
excerpt: "This endpoint allows you to **query historical total supply of a coin by number of days away from now based on provided coin ID**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:41:35 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - You may leave the interval params as empty for automatic granularity:
>   - 1 day from now = **5-minutely** data
>   - 2-90 days from now = **hourly** data
>   - 91 days & above from now = **daily** data (00:00 UTC)
> - Cache/Update Frequency: 5 minutes.
> - The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).
> - Exclusive for Enterprise Plan Subscribers only.
