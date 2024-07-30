**Looking for more projects like these? Follow me on [LinkedIn](https://www.linkedin.com/in/mariasgrebelo/) and check out my projects and articles on [WillowLink Magazine](willowlink.com/blog)**

To test the project please go to: https://psxclub.pages.dev/
To give feedback, find me at willowlink.com
All feedback is appreciated, but please don't spam me with bs. ^-^
  
  
  # psx

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view project in browser

  THE PSX CLUB
Nov 24, 2023


Full Project: https://psxclub.pages.dev/ 

A web-based app designed to gather and analyze data on relationships and sexual behavior, aimed at supporting psychology research, the sex and relationship industry, and enhancing consumer behavior understanding. Envisioned as a playful tool for couples, it holds the potential to evolve into a mobile app, emphasizing safety and intimacy.

This project was developed to collect and organize all sorts of data related to relationships and sexual behavior. The final mission is that this data can be relevant to psychology research, to companies selling products and services related to the sex and relationship industry, and to develop a higher sense of understanding of the behavior of consumers in the field.

​The project consists in:


Data Analysis
Web Development of a Mobile App to test accuracy and interest
MVP:
Simple web-based app with three activities:
Fantasy Generator
Fetish A-Z List
Kamasutra Generator (AKA Kama-Roulette)
Scalable Product:
Full app with user login and personalized experience
Features:
Fantasy Generator
With options for “already tried” and feedback on enjoyment from 0-10. Considering and excluding types for ethical reasons.
List of Fetishes
With options for “already tried” and feedback on enjoyment from 0-10
Kamasutra Generator
With options for ‘like’ and ‘dislike’. Considering and excluding types for ethical reasons.
Truth and Dare
With three different levels (friendly, RACK, and all-included), considering and excluding types for ethical reasons.
Love Language Quiz
Sex Positive version of the BDSM Test
Quizzes for more personalized offers
Membership
Subscription, first 2 months after launch will be a lifetime offer; After it will be monthly or annual, with discounts based on marketing campaigns and commitment, such as yearly.
Menstrual Calendar
Notifications based on sex-drive levels & recommendations
Other features
Data Collection:
Gender
Owned sex toys
Usage regularity
Drug consumption
Types of drugs
Sex drive
Sexual preferences
Sexual position preferences
Contraceptives
Sexual regularity (with and without partners)
Development of Programs to:
Scrape data (image)
Deduplicate & clean data
Train ML to generate human-friendly images of sex positions
Convert text data to a format that can be used by ML models
Extract thematic insights with Natural Language Processing (NLP)
Retain Anonymous Data from Users
CONCEPTUALIZATION
The idea came to me as simply as this: one day I played a game with a lover, where we used a Kamasutra card deck to find sexual positions. I felt the need to collect data on sexual positions and understand human preferences through statistical analysis.

Data on this subject was narrowed down to books and images, which were either too modernized (such as branding sex positions) or explained in translated Sanskrit names. The data was also very graphical, and complicated to manage in any way that could be public.

For this reason, I decided to keep working around similar topics and investigated apps that were meant for couples. Most of these apps were related to sexual fantasies or truth and dare-games. Therefore, the data types that I chose to work on was:

Sexual fetishes
Fantasies
Truths between intimate partners
Dares between intimate partners
Sexual positions
As the project develops, the data types and datasets become larger, however, I will focus on a step-by-step analysis of the project.

STEP-BY-STEP GUIDE
CHAPTER 1: INITIAL PROCESS
The starting point was research, I downloaded several free mobile apps with keywords like “sex games”, “couples play”, “kinky”, and “BDSM”. Then proceeded to play around with the apps, and figured that there was not only simplicity but also a repetition of the games. Besides that, the content was mostly focused on romantic monogamous stereotypes (e.g.: truth and dare games had questions like “Would you kiss a girl on the first date?”, and “What do you like most about my body?”; and dares such as “Tell to each other honest and vulgar compliments”, or “Don’t brush your teeth all day tomorrow”), or developing communities that engage in BDSM, which as well as standard, lacks privacy and positivism.

Highlights:

The apps were simple and repetitive;
The content and objectives targeted stereotypical monogamous couples;
The content targeted open BDSM communities, possibly breaking ethical standards;
Paid subscriptions weren’t worth the new features.
At that point, I decided to draft the project, first with the games:


Kamasutra Roulette
Fetish Generator
Truth & Dare
A list of needed data:


Images for sexual positions
List of fetishes
List of sexual fantasies
List of truths
List of dares
With support from GPT-4, I developed the framework for the application. The purpose was to have it live in mobile version, but not to publish it as a mobile application. Therefore, the selected process was to use Adobe XD through my Creative Cloud subscription to make the UI/UX design, develop the project using VS Code, and utilize ReactJS.
CHAPTER 2: UI/UX DESIGN
The ideal steps recommended by GPT-4 started with market research and considering the target, however, I knew the app was only a prototype to be scalable, and skipped that step. Followed by the design framework, which as a Data-driven and Code-driven person I would’ve skipped until all the data and relevant code were ready, instead, I decided to pay attention to this recommendation and started a mobile framework on Adobe XD. Knowing that the easiest games would be the Fetish Generator and the Kamasutra Roulette, the first draft came up like this:
Landpage & Main Menu:

Fantasy Generator 1/2:

Fantasy Generator 2/2:

Kama-Roulette 1/2:

Kama-Roulette 2/2:

Typography & Palette:

Once ready, I was frustrated by the lack of options to convert my carefully made design to JavaScript and CSS. Finally, after doing web research, I found the plugin (add the name of the plugin) and got my project code-ready, uploaded it to VS Code.
CHAPTER 3: DATA COLLECTION & WRANGLING
With this step certain, I proceeded into data scrapping and wrangling. First, I looked for any open-source data for Kamasutra positions, to find that nothing was available, and there’s little visual content on the matter. Finally, I found a Sex Positions database, featuring images, .gif, and titles. I proceeded to check the Copyrights and as there wasn’t mention of protection, worked on a Python project to scrape the images.

After having the sex positions downloaded and separated by categories (add categories), I proceeded to collect data on fetishes and sexual fantasies. While initially I planned and started developing a Phyton tool for web scrapping, I soon encountered the following issues:

Few blogs had titles as <h1>, and text as <a> or <p>;
Most websites used different templates and it was hard to automate the program to scrape only the relevant content;
All websites were full of ads, links, and references;
Overall, my attempt to develop all necessary tools from scratch versus my mission of having the MVP done in 48 hours didn’t resonate with the detailed complexity of this step. My usual options when it comes to data scraping are Instant Data Scraper (https://chromewebstore.google.com/detail/instant-data-scraper/) and Listly (https://chromewebstore.google.com/detail/listly-web-scraping/), both Chrome Extensions. The latter made the most sense due to its ability to outline the CSS of the page, and I ran it by parts in about 7 different blog posts keyworded by “sex fantasies bucket list”, and “fetishes you’ve never heard of”, among others.

DISCLAIMER: while it’s clear that Data Scraping can be a gray area, the data that was scraped was purely informative, all the titles and text were generated by GPT-4, except for fetish types, as those are global concepts.

From the data collected and exported into an Excel file, the next step was reviewing and cleaning the data. I organized the files into two columns, “Titles”, which features the names of fetishes and titles of sexual fantasies, and “Text”, containing the explanations from each title. Finally, I developed a program using Python to find all duplicate titles and export one file with two sheets, one showing all the “Titles” in one column, and mentioning if they were repeated or not; another containing only the “Titles” that aren’t duplicated and the “Text” from all the files that were respective to the titles.


1   import os
2   import pandas as pd
3   from fuzzywuzzy import fuzz

4 

5   directory = ‘./data’
6   excel_files = [f for f in os.listdir(directory) if f.endswith(‘.xlsx’)]
7   def is_similar(string1, string2, threshold=85):
8        string1 = str(string1)
9        string2 = str(string2)
10      return fuzz.ratio(string1, string2) > threshold

11

12  combined_df = pd.DataFrame() # Start with an empty DataFrame
13  source_files = {} # This will map each row index to its source file
14  for file in excel_files:
15        df = pd.read_excel(os.path.join(directory, file), engine=‘openpyxl‘)
16        current_length = len(combined_df)
17        combined_df = pd.concat([combined_df, df], ignore_index=True)
18        for i in range(current_length, len(combined_df)):
19              source_files[i] = file # Assign the source file to the corresponding row
20 

21  unique_rows = [ ]
22  duplicates_list = [ ] # This list will hold the duplicated rows
23  for i in range(len(combined_df)):
24     duplicate_found = False
25     for j in range(i+1, len(combined_df)):
26         similar_text = is_similar(combined_df.iloc[i][‘text‘], combined_df.iloc[j][‘text‘])
27         similar_fetishes = is_similar(combined_df.iloc[i][‘fetishes‘], combined_df.iloc[j] [‘fetishes‘])
28
29         if similar_text and similar_fetishes:
30             duplicates_list.append((combined_df.iloc[j][‘fetishes‘], source_files[j]))
31             duplicate_found = True
32             break
33
34    if not duplicate_found:
35             unique_rows.append(combined_df.iloc[i].values)
36 

37  unique_df = pd.DataFrame(unique_rows, columns=combined_df.columns)
38  duplicates_df = pd.DataFrame(duplicates_list, columns=[‘Fetish‘, ‘Source File‘]) # This DataFrame will contain the duplicates and their source files
39 

40  unique_df.to_excel(‘unique_data.xlsx‘, index=False, engine=‘openpyxl‘)
41  duplicates_df.to_excel(‘duplicates_data.xlsx‘, index=False, engine=‘openpyxl‘)
CHAPTER 4: DATA STRUCTURE
With this step completed, I reviewed both sheets to make sure that all data and duplicates were correct, and stepped into structuring the first game “Fantasy Generator”.

The “Fantasy Generator” was divided into three categories:

Some easy & fun play
Getting kinky together
Going all the way!
Data for Fantasy Generator:

Converted to JSON:
{ "Category": "Going all the way!", "Intro": "Explore", "Title": "Play Loose Your Virginity" }, { "Category": "Getting kinky together", "Intro": "Be Creative!", "Title": "Play Pay for Sex" }, { "Category": "Going all the way!", "Intro": "Explore", "Title": "Age Play!" }, (...)
Because my data had a lot of Fetishes, but not all were going to be included as doable fantasies for partners to play with, I took the opportunity to build a Fetish A-Z list, which not only could help users understand some of the fantasies, but also provide some Adult Learning content, which is an enriching path for the next level product that I intended to develop. To build this list, I leveraged GPT-4 to process informative and factual text collected from different blogs and websites, and wrap the most relevant information, rewriting it. For this, and to avoid repetition of the template answers, I used three different prompts:

“Rewrite this with a sensual, teasing, and slightly naughty tone, keep it short:”

“Try another sexy and naughty tone for this, keep it short:”

“Rewrite this with a tone that evokes sexuality, but also shows that you’ve experienced it, keep it short:”

Finally, I accomplished a sheet with all the A-Z fetishes collected and wrangled and started processing.
 

Fetish A-Z post data-cleaning:

Converted to JSON:
{ "Title": "Abrasion", "Description": "Craving a walk on the wild side? Abrasion, a sizzling subset of BDSM, stirs up passions with the tantalizing sting of rough surfaces like sandpaper or steel wool. For those who love a touch of intensity, this might just be your next guilty pleasure. Dive in, but always play safe and consensual. 😉" }, { "Title": "Actirasty", "Description": "Feeling the heat? When it comes to weather-inspired kinks, there's no shortage of titillating temptations. From brontophilia's electrifying allure of thunderstorms to chionophilia's icy seduction of snow, nature knows how to tease. Actirasty, however, basks in the sensual embrace of sunlight. Beyond just missing the sun after a long winter, this fetish indulges in the erotic warmth of the sun's rays, often merging with the thrill of outdoor rendezvous. Whether it's a gentle caress of sunlight or a full-blown sunbath, actirasty turns up the temperature in all the right places. Dive in, but always stay sun-kissed, not sunburned. 😉" }, (...)
As I was missing a UI/UX framework for the Truth & Dare game, as well as for the newest idea “Fetish A-Z” list, I decided to first process all the data, and prepare it for VS Code, while considering the design aspects and differentiation between all games on the application.

As mentioned above, one of the main barriers that I came across when working on the game of “Truth & Dare”, was that the content and objectives targeted stereotypical monogamous couples. This aspect became even more relevant after using Listly to scrape over 2.000 truth-and-dare options for couples and to “spice the night”. To show some examples:

After reviewing and cleaning this data, I decided to stop working on this section and replace the ‘Truth & Dare’ game with the ‘Fetishes A-Z’ list. It was actually a relief to be able to utilize my first framework instead of modifying the landpage to fit the extra section.

Finally, I started processing the ‘Kama-Roulette’. I needed to find visual information about sex positions and Kamasutra positions. With some research, I found a Sexual Positions website (https://www.sexualpositionsfree.com/) which featured visual and even some animated (.gif) images of different positions. Since the purpose of this project is just to gather feedback from my close network, I scrapped the images using a python program that I developed.

I processed each title with my own names, except for those which were Kamasutra positions, and therefore had specific names. From this point, I separated each type into the following folders:

CHAPTER 5: PRODUCT BUILDING
Starting with downloading my Adobe XD design to be production-ready, I used Locofy AI (https://www.locofy.ai/). First, the plugin was found on Adobe XD, and I processed each section by adding types to the components, such as buttons, headings, texts, and dropdown menus. Once ready, I downloaded the Locofy desktop app and imported my project with Locofy Builder, which was immediately converted to React JS.

Ready. I started working using VS Code and adding all the folders and files to the directory. Obviously, I used the terminal to install the dependencies and npm started to have a constant awareness of how the app was looking. My objective was to have it web-based but mobile-adapted, so the only struggle was to fix the CSS so that it would work on desktop websites as well. My directory looked like this:

Each page was inside the ‘src’ folder, while the images, JSON, and other components were uploaded to the ‘public’ folder. I’ll share some snippets of the different pages, although everything is available on GitHub (https://github.com/serotoninmix/psx).
 

Landpage Snippets

Fantasy Generator Snippets

Added a Form:
 


Fetishes A-Z Snippets
 


Kama-Roulette Snippets
 


To improve the fun, I created an animation using CSS:
 


CHAPTER 6: TESTING & PUBLISHING
As all good web development happens, I had to spend many hours fixing the smallest CSS errors such as ‘z-index’ and web vs. mobile views. Fast-forward to conversations with GPT-4 and modifications, the project was ready to ‘build’.

The highlight of my weekend was when I wrote and entered the following command:

npm run build

From that point on, all that I needed was a place on the web to host it. Initially, I wanted to make this project a subdomain of this website (psx.willowlink.com). However, because my domain is still under 60 days from purchase, through CloudFlare, and is being hosted on Hostinger, the success was none.

After many hours of trying to execute all the options available through community and customer support, I decided to try another option, and used my CloudFlare account to deploy the project through CloudFlare Pages.

The process was as simple as:

Login to CloudFlare
Go to ‘Workers & Pages’ on the left sidebar
Select ‘Create Application’
Select ‘Pages’ on the top menu
Click on ‘Upload Assets’ (it’s also possible to upload directly through your GitHub directory)
Create a Project Name
Upload Files from the ‘Build’ folder of your project
Deploy!
CHAPTER 7: FINAL CONSIDERATIONS
General Information

Project Pages: 6

Project JSON Data Files: 2 (Fetishes & Fantasies)

Project Image Data Folders: 7 (Sexual Positions by Category)

Final Product: https://psxclub.pages.dev/


Technical Information:

Languages Used: REACT JS, Javascript, JSON, HTML, CSS, and Python (for data scraping and deduplication).

Tools Used: Adobe XD, Locofy AI, Listly, CloudFlare, Hostinger, Notion, Chat GPT-4, Bard AI, and VS Code.

 

Time Management

Total Dedicated Days:

Expected: 2.5	
Reality: 3.5	
Conceptualizing: 3 hours

UI/UX Design: 1.5 hours

Collect, Scrape, and Clean Data: 5 hours

Reviewing and Cleaning Code from Locofy: 1.5 hours

Coding: 7 hours

Reviewing and Fixing: 5 hours

Attempting to Host as Subdomain: 5 hours

Hosting through CloudFlare Dev Pages: 20 minutes

TOTAL: 28 HOURS AND 20 MINUTES

 

Conclusion

The project allowed me to gain skills in Data Scrapping, and cleaning and to grow a data-driven mindset, while working on a final product that had real-world usage and was scalable.

My utmost mission was to work with data and web development while having fun. Moreover, this project was also part of a draft concept that I had started working on months ago, of building a community focused on Positive Sex, using technology as a way to gain new insights and promote healthy sexuality.

The benefit is that the prototype has gained over 30 positive feedback and mentions through my network, and apparently people have been testing it and enjoying the gamified experience with their partners. The fact that the app is usable and has a positive influence means that there’s a prospect market share, and therefore it is scalable to a real mobile app.

My future objectives are to find interested parties to develop this into a product that a) leverages positive resources and data existent, to bring a good user experience; b) collects and leverages data from the users to gain more knowledge and expand the opportunities within the Sex Positive industry.

