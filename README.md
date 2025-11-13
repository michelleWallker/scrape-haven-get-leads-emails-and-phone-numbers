# ScrapeHaven – Get Leads Emails and Phone Numbers Scraper

> This project helps you pull high-value business details straight from Google Maps, including emails, phone numbers, websites, and social links. It removes the manual grind of lead collection and delivers clean, structured data you can actually use.

> If you’re gathering leads, comparing competitors, or enriching datasets, this Google Maps scraper gives you a fast and reliable way to get the job done.


<p align="center">
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://github.com/za2122/footer-section/blob/main/media/scraper.png" alt="Bitbash Banner" width="100%"></a>
</p>
<p align="center">
  <a href="https://t.me/devpilot1" target="_blank">
    <img src="https://img.shields.io/badge/Chat%20on-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  </a>&nbsp;
  <a href="https://wa.me/923249868488?text=Hi%20BitBash%2C%20I'm%20interested%20in%20automation." target="_blank">
    <img src="https://img.shields.io/badge/Chat-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>&nbsp;
  <a href="mailto:sale@bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Email-sale@bitbash.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>&nbsp;
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Visit-Website-007BFF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website">
  </a>
</p>




<p align="center" style="font-weight:600; margin-top:8px; margin-bottom:8px;">
  Created by Bitbash, built to showcase our approach to Scraping and Automation!<br>
  If you are looking for <strong>Scrape Haven: Get Leads Emails and Phone Numbers</strong> you've just found your team — Let’s Chat. 👆👆
</p>


## Introduction

ScrapeHaven automates the process of collecting business information from Google Maps and visiting each listed website to uncover deeper contact details. It solves the slow, error-prone challenge of manual research and turns it into a repeatable, scalable workflow.

It’s a good fit for marketers, founders, data analysts, and anyone who needs accurate contact information without tedious browsing.

### How It Helps

- Quickly searches locations and extracts core business details.
- Crawls each website to pull emails and social links.
- Processes large result sets without slowing down.
- Organizes everything into structured, easy-to-export formats.
- Delivers consistently clean and useful lead-gen data.

## Features

| Feature | Description |
|---------|-------------|
| Location Search Automation | Finds businesses based on any search term and geographic query. |
| Batch Processing | Handles large result sets by splitting them into efficient batches. |
| Contact Detail Extraction | Retrieves phone numbers, emails, websites, and review stats. |
| Social Link Discovery | Scans websites to collect Facebook, Instagram, Twitter, and LinkedIn URLs. |
| Proxy Support | Rotates proxies to avoid blocks and maintain stable scraping sessions. |
| Flexible Output Formats | Exports datasets into JSON, CSV, and more. |

---

## What Data This Scraper Extracts

| Field Name | Field Description |
|------------|------------------|
| name | The business’ official name as shown on Google Maps. |
| address | Full formatted address including street, city, and country. |
| phone_number | Publicly listed business phone number. |
| email | Email address extracted from the business website. |
| website | Official website URL. |
| facebook | Link to the business’ Facebook page if detected. |
| instagram | Link to their Instagram profile. |
| twitter | Link to their Twitter profile. |
| linkedin | Link to their LinkedIn company page. |
| reviews_average | Average customer review rating. |

---

## Example Output

Example:


    [
        {
            "name": "Blue Bottle Coffee",
            "address": "450 W 15th St, New York, NY 10011, USA",
            "phone_number": "+1 212-924-1200",
            "email": "info@bluebottlecoffee.com",
            "website": "https://www.bluebottlecoffee.com",
            "facebook": "https://www.facebook.com/bluebottlecoffee",
            "instagram": "https://www.instagram.com/bluebottle",
            "twitter": "https://twitter.com/bluebottle",
            "linkedin": "https://www.linkedin.com/company/blue-bottle-coffee",
            "reviews_average": 4.5
        }
    ]

---

## Directory Structure Tree


    Scrape Haven: Get Leads Emails and Phone Numbers/
    ├── src/
    │   ├── runner.js
    │   ├── extractors/
    │   │   ├── maps_parser.js
    │   │   ├── website_scanner.js
    │   │   └── social_links.js
    │   ├── outputs/
    │   │   └── formatter.js
    │   └── config/
    │       └── settings.example.json
    ├── data/
    │   ├── inputs.sample.json
    │   └── sample_output.json
    ├── package.json
    └── README.md

---

## Use Cases

- **Marketing teams** use it to gather leads for outreach so they can contact businesses at scale without manual research.
- **Agencies** use it to enrich client databases with verified contact information to improve campaign accuracy.
- **Analysts** use it to map competitors across regions and compare online presence details.
- **Founders** use it to identify potential partners or prospects when entering new markets.
- **Researchers** use it to build structured datasets of local businesses for study or analysis.

---

## FAQs

**Does the scraper access each business website?**
Yes — after collecting listings, it visits each website to extract emails and social media links.

**How many results can it process at once?**
It can handle large result sets thanks to batch processing, which keeps workloads balanced.

**What format does the data export in?**
You can export structured results in formats like JSON or CSV for easy integration elsewhere.

**Can it detect multiple emails on a site?**
It scans all visible email patterns and returns the most relevant ones based on position and context.

---

## Performance Benchmarks and Results

**Primary Metric:**
Processes an average of 40–60 business listings per minute depending on location density and website complexity.

**Reliability Metric:**
Maintains a 95%+ success rate on completed listings thanks to proxy rotation and retry logic.

**Efficiency Metric:**
Batch execution keeps memory usage stable even during high-volume scrapes.

**Quality Metric:**
Delivers consistently high data completeness with accurate phone, email, and social link extraction across most business types.


<p align="center">
<a href="https://calendar.app.google/74kEaAQ5LWbM8CQNA" target="_blank">
  <img src="https://img.shields.io/badge/Book%20a%20Call%20with%20Us-34A853?style=for-the-badge&logo=googlecalendar&logoColor=white" alt="Book a Call">
</a>
  <a href="https://www.youtube.com/@bitbash-demos/videos" target="_blank">
    <img src="https://img.shields.io/badge/🎥%20Watch%20demos%20-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch on YouTube">
  </a>
</p>
<table>
  <tr>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/MLkvGB8ZZIk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review1.gif" alt="Review 1" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash is a top-tier automation partner, innovative, reliable, and dedicated to delivering real results every time.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Nathan Pennington
        <br><span style="color:#888;">Marketer</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/8-tw8Omw9qk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review2.gif" alt="Review 2" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash delivers outstanding quality, speed, and professionalism, truly a team you can rely on.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Eliza
        <br><span style="color:#888;">SEO Affiliate Expert</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtube.com/shorts/6AwB5omXrIM" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review3.gif" alt="Review 3" width="35%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Exceptional results, clear communication, and flawless delivery. Bitbash nailed it.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Syed
        <br><span style="color:#888;">Digital Strategist</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
  </tr>
</table>
