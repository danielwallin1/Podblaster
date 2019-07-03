# Assignment #

The task is to build a simple podcast player.
Please create a new repo that contains your player, and use this server but don't modify it.

## Assessment

When assessing the assigment, we will look at the code to see how well it is structured, how easy it is to read and how simple it would be to maintain.

We expect that you'll be able to motivate and discuss the benefits and drawbacks of the choices in your solution.

We understand that there isn't a lot of time for implementation, and we keep that in mind. We expect that the code will have both strong and weak areas, and we'll be looking to bring those up when we meet to discuss your solution.

Basically, we want to see your version of "clean code", and then have a discussion around it.

Also, please list what you left out. For example things that you would have spent more time on if you had more time, and what things you did not spend time on at all.

## Provided Materials ##

Contained within this package is a simple server with the following endpoints:

`/episodes` returns episodes list.

`/episodes/:episode_id` returns info about one episode.


Install the dependencies by running `npm install`.
Run the server with `npm start`.
Then the server listens at port 1337, so for example the list of all episodes is at `http://localhost:1337/episodes`.

Static assets are in `/audio` and `/images`.

### Basic playback ###

The player allows the user to play, pause, seek forward/back (jump ahead or back five seconds), and to jump to a user-chosen point in the timeline.

Implementerat. Användaren kan klicka på utvalda ställen på tidslinjen och hoppa till en specifik
plats i podden.

### Markers ###

The player also features "markers". A marker is a text, an image or an advertisement that is shown to the user when the current playback time is within the markers start and end time. At most one marker is displayed at any point in time.

Implementerat. Markers visas på definierade sekvenser. I tomma sekvenser, vid start och i pauser har
jag valt att visa poddens namn.

#### Text Link Marker ####

Displays text.

Implementerat. Text visas på utvalda sekvenser under uppspelning.

#### Image Link Marker ####

Displays an image.

Implementerat. Bilder visas på utvalda sekvenser under uppspelning.

#### Advertisement (Ad) Marker ####

Displays text that links to an external URL.

Implementerat. Annonser visas på utvalda sekvenser under uppspelning. Klickar man på annonsen
kommer man till url:en som annonsen pekar på.

##### Optional #####

If you feel the have the time and desire, after making a solid foundation with the aforementioned features, you can make the ad markers a little bit special. If an ad is playing the user shall not be able to skip past it. Playing and pausing is OK. If the user attempts to skip past an entire ad marker then the skipped over ad marker shall play before continuing to the position the user skipped to.

Implementerat. Om användaren klickar på fast forward när en annons visas, sker detta först efter
att annonsen har visats klart. Användaren får ej indikation på att annonsen måste spelas färdigt
innan den hoppar framåt till utvalt stället, detta pga tidsbrist.

##### Additional notes #####

Implementerat applikationen för desktop och mobil. Inget ramverk används, endast JavaScript.
Struktur efter ansvarsområde / separation of concerns, "player", "volume", "progress", "markers",
enligt designmönster revealing module pattern. Byggprocess ej implementerad pga tidsbrist.

Volymknapp är ett tillägg jag har gjort.