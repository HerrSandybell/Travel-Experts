# Travel Experts
This is the first assignment of the SAIT Software Development's CPRG 210 course. The goal is to create the front-end section of a website for Travel Experts, a travel agency.

The specifications for this website are present <a href="https://github.com/cprg210/assignments/blob/master/assignment-1/README.md">here</a>

This project is done solely by Tarek Alatrach.

## Design

The color template was chosen to emphasize the buttons. Their golden-yellow color contrasts pleasantly on the navy-blue menus and backgrounds. Red was the tertiary color used as it contrasts well against both the yellow and blue.

## Layout

The layout was designed to emphasize the big sweeping backgrounds of the hero section and those of the registration pages. The aim is to invoke a sense of grandeur associated with vacationing in beautiful locations.

## Database

I constructed a database from popular travel destinations. One peculiar problem I faced was the destination 

## Challenges

### Layout/Design

As this is the first project I've undertaken where the goal was to create a visually-pleasing and functional interface, I struggled in the beginning with balancing colors and the layout of the website itself. I had to learn about color theory as well as advance my knowledge of flex-boxes in order to tackle this. Flex-box is used liberally. However, some parts (especially the forms) would have benefited more from gridbox application.

Layout continues to be a challenge. CSS needs to be further cleaned and optimized.

### express module and 404 routing.

My goal was to have any unknown route to reroute to a specific 404 page. However, I only managed to do that when the route is one deep (i.e., ./bla or ./gah). Anything deeper than that does route to the correct 404, but it is unable to fetch the scripts and css files, only showing the html file. I have yet to solve this issue.

