import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "computer-applications";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

/* ================================================================== */
/* CBSE Computer Applications (165)                                    */
/* ================================================================== */

const cbse: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "networking-and-the-internet",
    title: "Networking and the Internet",
    icon: "🌐",
    description: "Types of networks, the Internet and the Web, URLs, protocols and Internet services.",
    lessons: [
      {
        slug: "networks-internet-protocols",
        title: "Networks, the Web and Protocols",
        summary: "PAN, LAN, MAN and WAN; Internet vs WWW; the parts of a URL; HTTP, FTP, SMTP, POP3, TCP/IP and other protocols; Internet services.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "📱",
            caption: "Priya in Pune video-calls her grandmother in Madurai. Her voice travels as tiny packets of data across many connected computers in a fraction of a second.",
          },
          {
            type: "text",
            md: "A **computer network** is a group of computers and devices joined together so that they can share data and resources such as a printer or an Internet connection. Each device on a network is called a **node**.\n\nThe **Internet** is a worldwide network of networks. Millions of school, office, home and mobile networks are linked to one another, so any device on one can reach a device on another.",
          },
          {
            type: "table",
            headers: ["Type", "Full form", "Area covered", "Example"],
            rows: [
              ["**PAN**", "Personal Area Network", "a few metres around one person", "phone linked to earbuds by Bluetooth"],
              ["**LAN**", "Local Area Network", "a room, building or campus", "computer lab of your school"],
              ["**MAN**", "Metropolitan Area Network", "a city", "cable TV network across Chennai"],
              ["**WAN**", "Wide Area Network", "a country or the whole world", "the Internet; a bank's network of branches"],
            ],
          },
          {
            type: "text",
            md: "The **World Wide Web (WWW)** is one service that runs on the Internet. It is a huge collection of linked **web pages**. A group of related web pages under one name is a **website**. A **web browser** (Chrome, Firefox, Edge) is the program that fetches and shows web pages, and a **web server** is the computer that stores a website and sends its pages when asked. An **ISP** (Internet Service Provider), such as a telecom or broadband company, connects you to the Internet.",
          },
          {
            type: "example",
            title: "Reading a URL",
            problem: "Split this address into its parts and say what each part means: `https://www.myschool.edu.in/results/class10.html`",
            steps: [
              "`https` is the **protocol**: the set of rules the browser uses to talk to the server. The extra *s* means the connection is secure (encrypted).",
              "`www.myschool.edu.in` is the **domain name**: the human-friendly name of the server. `.in` is the country code for India and `.edu` marks education.",
              "`/results/class10.html` is the **path**: the folder `results` and the file `class10.html` on that server.",
              "Together they form a **URL** (Uniform Resource Locator), the unique address of one resource on the Web.",
            ],
            answer: "Protocol = https, domain name = www.myschool.edu.in, path = /results/class10.html.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The computers in your school's computer lab are connected to share one printer. This network is a:",
                options: ["LAN", "PAN", "MAN", "WAN"],
                answer: 0,
                explain: "One room or building is a **Local Area Network**. A PAN is only around one person; MAN and WAN cover a city or more.",
              },
            ],
          },
          {
            type: "heading",
            text: "Protocols: the rules of the road",
          },
          {
            type: "table",
            headers: ["Protocol", "Full form", "Job"],
            rows: [
              ["**HTTP / HTTPS**", "HyperText Transfer Protocol (Secure)", "transfers web pages from a web server to a browser; HTTPS encrypts them"],
              ["**FTP**", "File Transfer Protocol", "uploads and downloads files between computers"],
              ["**SMTP**", "Simple Mail Transfer Protocol", "sends e-mail from your mail program to the mail server"],
              ["**POP3**", "Post Office Protocol version 3", "downloads e-mail from the server to your device"],
              ["**TCP/IP**", "Transmission Control Protocol / Internet Protocol", "TCP breaks data into packets and puts them back in order; IP addresses and routes each packet"],
              ["**PPP**", "Point-to-Point Protocol", "connects two computers directly, e.g. over a telephone line"],
              ["**Telnet**", "(Teletype Network)", "lets you log in to and use a remote computer"],
              ["**VoIP**", "Voice over Internet Protocol", "carries voice calls over the Internet"],
            ],
          },
          {
            type: "mistake",
            wrong: "The Internet and the World Wide Web are the same thing.",
            right: "The Internet is the network (the roads). The WWW is one service that uses it (one kind of traffic), just like e-mail, file transfer and video calls.",
            why: "We open most websites through the Internet, so the two words feel the same. But e-mail, online games and VoIP calls use the Internet without using any web page.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each protocol to its job.",
              pairs: [
                ["SMTP", "Sends e-mail to the mail server"],
                ["POP3", "Downloads e-mail to your device"],
                ["FTP", "Transfers files between computers"],
                ["HTTP", "Brings web pages to the browser"],
                ["VoIP", "Carries voice calls over the Internet"],
              ],
              explain: "Remember **S**MTP **S**ends mail and **P**OP3 **P**ulls it down. HTTP is only for web pages; FTP is for whole files.",
            },
          },
          {
            type: "list",
            items: [
              "**E-mail** and **chat**: written messages, delivered in seconds.",
              "**Video conferencing**: live audio and video meetings, e.g. online classes.",
              "**E-learning**: courses, videos and tests online.",
              "**E-banking** and **e-shopping**: paying bills, transferring money and buying goods online.",
              "**E-reservation**: booking train, bus, flight or cinema tickets online.",
              "**Social networking**: sharing posts, photos and messages with friends.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In \"full form\" and \"difference\" questions, one wrong letter loses the mark: it is **Hyper**Text Transfer Protocol and **Uniform** Resource Locator. For \"Internet vs WWW\", write one line for each and give an example service.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "SMTP is used to download e-mail from the mail server to your phone.",
                answer: false,
                explain: "SMTP *sends* mail. Downloading is done by POP3 (or IMAP).",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "A network links nodes to share data and resources; PAN < LAN < MAN < WAN in area.",
              "The Internet is a network of networks; the WWW is a service of linked web pages on it.",
              "A URL = protocol + domain name + path.",
              "HTTP(S) for web pages, FTP for files, SMTP sends mail, POP3 receives mail, TCP/IP moves packets.",
            ],
          },
        ],
        flashcards: [
          { front: "Internet", back: "A worldwide network of networks." },
          { front: "World Wide Web", back: "A service on the Internet: a collection of linked web pages viewed in a browser." },
          { front: "URL", back: "Uniform Resource Locator: the address of a resource on the Web, e.g. https://www.example.in/index.html." },
          { front: "ISP", back: "Internet Service Provider: a company that connects users to the Internet." },
          { front: "TCP/IP", back: "TCP splits data into packets and reassembles them; IP addresses and routes the packets." },
          { front: "SMTP vs POP3", back: "SMTP sends e-mail; POP3 downloads e-mail from the server." },
          { front: "Web browser vs web server", back: "A browser requests and displays pages; a server stores the website and sends the pages." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which network covers the largest area?",
            options: ["WAN", "MAN", "LAN", "PAN"],
            answer: 0,
            explain: "A Wide Area Network spans countries or the whole world. The Internet is the biggest WAN.",
          },
          {
            kind: "mcq",
            q: "Which protocol is used to upload a file to a web server?",
            options: ["FTP", "SMTP", "POP3", "VoIP"],
            answer: 0,
            explain: "FTP (File Transfer Protocol) moves files between computers. SMTP and POP3 are for e-mail.",
          },
          {
            kind: "fill",
            q: "In the URL https://www.isro.gov.in, the part \"https\" is the ___.",
            answer: ["protocol"],
            explain: "The first part of a URL, before ://, is the protocol.",
          },
          {
            kind: "truefalse",
            q: "The WWW is one of the services that run on the Internet.",
            answer: true,
            explain: "The Internet is the network; the Web is one service on it, along with e-mail, chat, VoIP and more.",
          },
          {
            kind: "order",
            q: "Arrange the networks from smallest to largest area.",
            items: ["PAN", "LAN", "MAN", "WAN"],
            explain: "Personal → Local → Metropolitan → Wide.",
          },
          {
            kind: "multi",
            q: "Which of these are protocols used for e-mail? (Choose all that apply)",
            options: ["SMTP", "POP3", "HTTP", "PPP"],
            answers: [0, 1],
            explain: "SMTP sends mail and POP3 receives it. HTTP is for web pages and PPP is for a direct link between two computers.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What does the extra \"S\" in HTTPS tell you?",
            options: ["The connection is encrypted (secure)", "The site is a school site", "The page loads faster", "The page is stored on your own computer"],
            answer: 0,
            explain: "HTTPS = HTTP Secure. Data between browser and server is encrypted, which is important for logins and payments.",
            difficulty: 2,
            hint: "S stands for one word about safety.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "html-lists-images-links",
    title: "HTML: Lists, Images and Links",
    icon: "🔗",
    description: "Ordered, unordered and description lists, the img tag and hyperlinks with the a tag.",
    lessons: [
      {
        slug: "lists-images-links",
        title: "Lists, Images and Hyperlinks",
        summary: "Make ordered, unordered and description lists, add images with img, and link pages with the anchor tag.",
        minutes: 17,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A recipe has numbered steps and a shopping list has bullet points. HTML gives you both, and it lets you add pictures and clickable links so a page feels alive.\n\nAn **HTML tag** is a word inside angle brackets, like `<p>`. Most tags come in pairs: an opening tag and a closing tag such as `</p>`. Extra settings written inside an opening tag are called **attributes**, e.g. `type=\"A\"`.",
          },
          {
            type: "table",
            headers: ["List", "Tags", "Useful attributes"],
            rows: [
              ["**Unordered list** (bullets)", "`<ul>` with `<li>` items", "`type`: disc (default), circle, square"],
              ["**Ordered list** (numbers or letters)", "`<ol>` with `<li>` items", "`type`: 1, A, a, I, i; `start`: the number to begin from"],
              ["**Description list** (term and meaning)", "`<dl>`, `<dt>` for the term, `<dd>` for its description", "none needed"],
            ],
          },
          {
            type: "code",
            lang: "html",
            runnable: true,
            caption: "Edit the type and start values and run again.",
            code: `<!DOCTYPE html>
<html>
<head>
  <title>Lists</title>
</head>
<body>
  <h3>Making masala chai</h3>
  <ol type="1">
    <li>Boil water with ginger</li>
    <li>Add tea leaves and sugar</li>
    <li>Pour in milk and boil again</li>
  </ol>

  <h3>Things to buy</h3>
  <ul type="square">
    <li>Milk</li>
    <li>Tea leaves</li>
  </ul>

  <h3>Glossary</h3>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
  </dl>
</body>
</html>`,
          },
          {
            type: "example",
            title: "Starting a list at C",
            problem: "Write an ordered list that shows the items as C. Physics, D. Chemistry, E. Biology.",
            steps: [
              "Capital letters need `type=\"A\"`.",
              "C is the 3rd letter, so the list must start at 3. The `start` attribute always takes a **number**, whatever the type: `start=\"3\"`.",
              "Write the items with `<li>` and close the list with `</ol>`.",
            ],
            answer: "`<ol type=\"A\" start=\"3\"> <li>Physics</li> <li>Chemistry</li> <li>Biology</li> </ol>`",
          },
          {
            type: "mistake",
            wrong: "To start a lettered list at C, write `start=\"C\"`.",
            right: "Write `start=\"3\"`. The start value is always a number; the `type` decides how it is shown (3, C, c, III or iii).",
            why: "Because the list shows letters, it feels natural to type a letter. But the browser counts in numbers and only *displays* them as letters or Roman numerals.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "What label does the first item get?",
              emoji: "🔢",
              options: ["iv.", "4.", "i.", "d."],
              answer: 0,
              trap: 2,
              explain: "For `<ol type=\"i\" start=\"4\">`, the type is small Roman numerals and counting begins at 4, so the first item is **iv.** The start value is not ignored just because the type is Roman.",
            },
          },
          {
            type: "heading",
            text: "Images and links",
          },
          {
            type: "text",
            md: "The `<img>` tag shows a picture. It is an **empty tag**: it has no closing tag. Its `src` attribute gives the file name or address of the image, and `alt` gives **alternate text** shown if the image cannot load and read aloud by screen readers. `width` and `height` set the size in pixels.\n\nA **hyperlink** is made with the **anchor tag** `<a>`. Its `href` attribute holds the address to open. The text between `<a>` and `</a>` is what the reader clicks. Adding `target=\"_blank\"` opens the link in a new tab, and `href=\"mailto:...\"` opens an e-mail to that address.",
          },
          {
            type: "code",
            lang: "html",
            runnable: true,
            caption: "The image is drawn from inline SVG data so it works without a file. Try changing width, or the link text.",
            code: `<!DOCTYPE html>
<html>
<body>
  <h3 id="top">Our School Trip</h3>
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80'%3E%3Crect width='120' height='80' fill='%2390caf9'/%3E%3Ccircle cx='95' cy='22' r='12' fill='%23ffeb3b'/%3E%3Cpath d='M0 80 L40 35 L75 80 Z' fill='%23388e3c'/%3E%3C/svg%3E"
       alt="Hills and the sun" width="240" height="160">

  <p>Read about
    <a href="https://www.isro.gov.in" target="_blank">ISRO</a>
    in a new tab.</p>
  <p>Write to us: <a href="mailto:office@myschool.edu.in">office@myschool.edu.in</a></p>
  <p><a href="#top">Back to top</a></p>
</body>
</html>`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which attribute of `<img>` gives the text shown when the picture cannot load?",
                options: ["alt", "src", "title", "href"],
                answer: 0,
                explain: "`alt` is the alternate text. `src` is the image file; `href` belongs to the `<a>` tag.",
              },
              {
                kind: "fill",
                q: "To link to an element with `id=\"top\"` on the same page, write `href=\"___\"`.",
                answer: ["#top"],
                explain: "A # followed by the id jumps to that part of the same page.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to \"write the HTML code\", examiners check that tags are **closed** and **nested** correctly: `<li>` must be inside `<ol>` or `<ul>`, and `</ol>` must come after the last item. Remember `<img>` and `<br>` are empty tags and need no closing tag.",
          },
          {
            type: "keypoints",
            items: [
              "`<ul>` = bullets (type disc, circle, square); `<ol>` = numbers or letters (type 1, A, a, I, i; start = a number).",
              "`<dl>` holds `<dt>` terms and `<dd>` descriptions.",
              "`<img src=\"...\" alt=\"...\" width=\"...\" height=\"...\">` is an empty tag.",
              "`<a href=\"...\">text</a>` makes a link; `target=\"_blank\"` opens a new tab; `#id` links within the page; `mailto:` opens e-mail.",
            ],
          },
        ],
        flashcards: [
          { front: "Tag for a bulleted list", back: "`<ul>` (unordered list), with each item in `<li>`." },
          { front: "Values of `type` for `<ol>`", back: "1, A, a, I, i." },
          { front: "Description list tags", back: "`<dl>` for the list, `<dt>` for the term, `<dd>` for its description." },
          { front: "Why is `alt` important?", back: "It shows text if the image fails to load and lets screen readers describe the image." },
          { front: "Attribute of `<a>` that holds the address", back: "`href` (hypertext reference)." },
          { front: "Empty tag", back: "A tag with no closing tag, e.g. `<img>`, `<br>`, `<hr>`." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which code shows bullets as small squares?",
            options: ["`<ul type=\"square\">`", "`<ol type=\"square\">`", "`<ul start=\"square\">`", "`<li type=\"box\">`"],
            answer: 0,
            explain: "Bullet style belongs to the unordered list `<ul>` with `type=\"square\"`.",
          },
          {
            kind: "mcq",
            q: "What does `<ol type=\"I\" start=\"2\">` show for its first item?",
            options: ["II.", "2.", "B.", "I."],
            answer: 0,
            explain: "Type I means capital Roman numerals; starting at 2 gives II.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The `<img>` tag needs a closing `</img>` tag.",
            answer: false,
            explain: "`<img>` is an empty tag; all its information is in attributes.",
          },
          {
            kind: "fill",
            q: "The attribute of `<a>` that opens the link in a new tab is target=\"___\".",
            answer: ["_blank"],
            explain: "`target=\"_blank\"` opens a new browser tab or window.",
          },
          {
            kind: "order",
            q: "Put the parts of an ordered list in the order they appear in the code.",
            items: ["`<ol>`", "`<li>`First item`</li>`", "`<li>`Second item`</li>`", "`</ol>`"],
            explain: "Open the list, write each item, then close the list.",
          },
          {
            kind: "multi",
            q: "Which are attributes of the `<img>` tag? (Choose all that apply)",
            options: ["src", "alt", "width", "href"],
            answers: [0, 1, 2],
            explain: "src, alt, width and height belong to `<img>`. href belongs to `<a>`.",
          },
          {
            kind: "mcq",
            q: "Which link opens a new e-mail to the school office?",
            options: ["`<a href=\"mailto:office@school.in\">`", "`<a href=\"office@school.in\">`", "`<a mail=\"office@school.in\">`", "`<a href=\"email:office@school.in\">`"],
            answer: 0,
            explain: "E-mail links use the `mailto:` prefix inside href.",
            difficulty: 2,
            hint: "The prefix is two words joined: mail + to.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "html-tables-and-forms",
    title: "HTML: Tables and Forms",
    icon: "📋",
    description: "Build tables with rows, cells, headings, rowspan and colspan, and collect input with forms.",
    lessons: [
      {
        slug: "tables-and-forms",
        title: "Tables and Forms",
        summary: "table, tr, th, td, caption, border, rowspan and colspan; form, input types, select, textarea and buttons.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Your class timetable is a grid of rows and columns. An admission form has boxes to type in and buttons to choose from. In HTML, the first is a **table** and the second is a **form**.",
          },
          {
            type: "table",
            headers: ["Tag", "Meaning"],
            rows: [
              ["`<table>`", "starts the table; `border=\"1\"` draws lines"],
              ["`<caption>`", "title of the table, shown above it"],
              ["`<tr>`", "**table row**"],
              ["`<th>`", "**table heading** cell (bold and centred by default)"],
              ["`<td>`", "**table data** cell"],
              ["`rowspan`", "attribute: a cell stretches down over several rows"],
              ["`colspan`", "attribute: a cell stretches across several columns"],
            ],
          },
          {
            type: "example",
            title: "A timetable with a merged cell",
            problem: "Make a table with columns Day, Period 1, Period 2. Monday has Maths, Science. Tuesday has one double period of Computers covering both periods.",
            steps: [
              "Row 1 is headings: three `<th>` cells.",
              "Row 2: `<td>Monday</td><td>Maths</td><td>Science</td>`.",
              "Row 3: Tuesday, then one cell that must fill **two columns**, so use `<td colspan=\"2\">Computers</td>`.",
              "Check: every row now fills 3 columns (1 + 1 + 1 and 1 + 2).",
            ],
            answer: "See the code below. The Computers cell uses colspan=\"2\".",
          },
          {
            type: "code",
            lang: "html",
            runnable: true,
            caption: "Try changing colspan to 1 and see the empty space on the right.",
            code: `<!DOCTYPE html>
<html>
<body>
  <table border="1" cellpadding="6">
    <caption>Class 10 Timetable</caption>
    <tr>
      <th>Day</th>
      <th>Period 1</th>
      <th>Period 2</th>
    </tr>
    <tr>
      <td>Monday</td>
      <td>Maths</td>
      <td>Science</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td colspan="2">Computers</td>
    </tr>
  </table>
</body>
</html>`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A cell must stretch down over 3 rows. Which attribute do you use?",
                options: ["rowspan=\"3\"", "colspan=\"3\"", "rows=\"3\"", "span=\"3\""],
                answer: 0,
                explain: "**Row**span merges cells downwards across rows; **col**span merges across columns.",
              },
            ],
          },
          {
            type: "heading",
            text: "Forms",
          },
          {
            type: "text",
            md: "A **form** collects information from the user. Everything goes inside `<form>` ... `</form>`. The `action` attribute names the page or program that receives the data, and `method` (get or post) says how it is sent.\n\nMost boxes are made with the empty tag `<input>`; its `type` attribute decides what it looks like. Each control needs a `name` so the receiving program knows which value is which.",
          },
          {
            type: "table",
            headers: ["Control", "Code", "Use"],
            rows: [
              ["Text box", "`<input type=\"text\">`", "one line of text, e.g. name"],
              ["Password", "`<input type=\"password\">`", "typed characters are hidden"],
              ["Radio button", "`<input type=\"radio\">`", "choose **only one** from a group"],
              ["Check box", "`<input type=\"checkbox\">`", "choose **any number**"],
              ["Drop-down list", "`<select>` with `<option>`", "pick from a list"],
              ["Text area", "`<textarea rows=\"4\" cols=\"30\">`", "several lines, e.g. address"],
              ["Buttons", "`<input type=\"submit\">`, `<input type=\"reset\">`", "send the form / clear it"],
            ],
          },
          {
            type: "code",
            lang: "html",
            runnable: true,
            caption: "Click both radio buttons: only one stays selected because they share name=\"board\".",
            code: `<!DOCTYPE html>
<html>
<body>
  <form action="register.php" method="post">
    Name: <input type="text" name="sname"><br><br>
    Password: <input type="password" name="pwd"><br><br>

    Board:
    <input type="radio" name="board" value="CBSE"> CBSE
    <input type="radio" name="board" value="ICSE"> ICSE<br><br>

    Clubs:
    <input type="checkbox" name="club" value="robotics"> Robotics
    <input type="checkbox" name="club" value="music"> Music<br><br>

    City:
    <select name="city">
      <option>Delhi</option>
      <option>Kolkata</option>
      <option>Hyderabad</option>
    </select><br><br>

    Address:<br>
    <textarea name="addr" rows="3" cols="30"></textarea><br><br>

    <input type="submit" value="Register">
    <input type="reset" value="Clear">
  </form>
</body>
</html>`,
          },
          {
            type: "mistake",
            wrong: "Give each radio button a different name, like `name=\"b1\"` and `name=\"b2\"`.",
            right: "All radio buttons in one question must share the **same** `name`. Their `value`s are different.",
            why: "The browser uses the name to group radio buttons. With different names, each button is its own group, so the user can select all of them, which defeats the purpose of \"choose one\".",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which input type fits each question on a form?",
              groups: ["text", "radio", "checkbox"],
              items: [
                { text: "Your full name", group: 0, hint: "The user types any words here." },
                { text: "Section: A, B or C (only one)", group: 1, hint: "Only one choice is allowed." },
                { text: "Sports you play (tick all)", group: 2, hint: "Many choices can be ticked together." },
                { text: "Your school's name", group: 0, hint: "Free typing, not a fixed list." },
                { text: "Do you need the school bus? Yes / No", group: 1, hint: "Exactly one answer." },
                { text: "Languages you can read (tick all)", group: 2, hint: "A person may read many languages." },
              ],
              explain: "Free typing → **text**. Exactly one from a group → **radio** (same name). Any number → **checkbox**.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a table question, draw the grid in rough first and count the cells in each row. A very common error is putting `<td>` directly inside `<table>` and forgetting the `<tr>`. For forms, write the `type` and `name` attributes for every input.",
          },
          {
            type: "keypoints",
            items: [
              "Table structure: `<table>` → `<tr>` rows → `<th>` heading cells or `<td>` data cells.",
              "`rowspan` merges cells down; `colspan` merges cells across.",
              "`<form action method>` holds controls; `<input type>` makes text, password, radio, checkbox, submit and reset.",
              "Radio buttons in one group share a name; `<select>`/`<option>` makes a drop-down; `<textarea>` takes many lines.",
            ],
          },
        ],
        flashcards: [
          { front: "`<th>` vs `<td>`", back: "`<th>` is a heading cell (bold, centred); `<td>` is an ordinary data cell." },
          { front: "colspan", back: "Attribute that makes a cell stretch across several columns." },
          { front: "rowspan", back: "Attribute that makes a cell stretch down over several rows." },
          { front: "Radio button vs check box", back: "Radio: choose only one in a group. Check box: choose any number." },
          { front: "`<textarea>`", back: "A multi-line text box; rows and cols set its size." },
          { front: "Submit vs reset", back: "Submit sends the form data to the action page; reset clears all the fields." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which tag creates a row in a table?",
            options: ["`<tr>`", "`<td>`", "`<th>`", "`<row>`"],
            answer: 0,
            explain: "`<tr>` = table row. Cells (`<td>` or `<th>`) go inside it.",
          },
          {
            kind: "numeric",
            q: "A table has 3 columns. In one row, the first cell has colspan=\"2\". How many more `<td>` cells are needed to complete that row?",
            answer: 1,
            explain: "The first cell already fills 2 of the 3 columns, so only 1 more cell is needed.",
            difficulty: 2,
            hint: "Add up the columns each cell covers.",
          },
          {
            kind: "truefalse",
            q: "Typed characters in `<input type=\"password\">` are hidden on the screen.",
            answer: true,
            explain: "The browser shows dots or stars instead of the real characters.",
          },
          {
            kind: "fill",
            q: "A drop-down list is made with the `<select>` tag and one ___ tag for each choice.",
            answer: ["option", "<option>"],
            explain: "Each choice in `<select>` is written in an `<option>` tag.",
          },
          {
            kind: "mcq",
            q: "Two radio buttons have name=\"g1\" and name=\"g2\". What happens?",
            options: ["Both can be selected at the same time", "Only one can be selected", "Neither can be selected", "The form will not show"],
            answer: 0,
            explain: "Different names make two separate groups, so each one can be selected. Use the same name to allow only one choice.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Order these tags as they nest, from outermost to innermost.",
            items: ["`<table>`", "`<tr>`", "`<td>`"],
            explain: "A table contains rows; a row contains cells.",
          },
          {
            kind: "multi",
            q: "Which of these are values of the `type` attribute of `<input>`? (Choose all that apply)",
            options: ["checkbox", "password", "submit", "textarea"],
            answers: [0, 1, 2],
            explain: "textarea is a separate tag, `<textarea>`, not an input type.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "styling-with-css",
    title: "Styling with CSS",
    icon: "🎨",
    description: "CSS rules, three ways to add CSS, selectors, and common properties for colour, text and boxes.",
    lessons: [
      {
        slug: "css-rules-and-selectors",
        title: "CSS Rules, Selectors and the Box",
        summary: "Write CSS rules, add them inline, internally or externally, use element, class and id selectors, and style text and boxes.",
        minutes: 17,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "HTML decides *what* is on the page: headings, lists, tables. **CSS** (Cascading Style Sheets) decides *how it looks*: colours, fonts, spacing and borders. Keeping the two separate means you can restyle a whole website by changing one file.",
          },
          {
            type: "text",
            md: "A CSS **rule** has a **selector** (which elements to style) and a **declaration block** in curly brackets. Each **declaration** is a property, a colon, a value and a semicolon:\n\n`h1 { color: navy; font-size: 28px; }`",
          },
          {
            type: "table",
            headers: ["Way", "Where it is written", "Example"],
            rows: [
              ["**Inline**", "in the `style` attribute of one tag", "`<p style=\"color: red;\">`"],
              ["**Internal** (embedded)", "in a `<style>` tag inside `<head>`", "`<style> p { color: red; } </style>`"],
              ["**External**", "in a separate .css file, linked in `<head>`", "`<link rel=\"stylesheet\" href=\"style.css\">`"],
            ],
          },
          {
            type: "table",
            headers: ["Selector", "Written as", "Styles"],
            rows: [
              ["**Element** (type)", "`p`", "every `<p>`"],
              ["**Class**", "`.note`", "every tag with `class=\"note\"` (many allowed)"],
              ["**ID**", "`#main`", "the one tag with `id=\"main\"` (unique on the page)"],
            ],
          },
          {
            type: "code",
            lang: "html",
            runnable: true,
            caption: "Change the colours, padding and margin, then run again.",
            code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background-color: #fffaf0; }
    h2 { color: darkgreen; text-align: center; }
    p { color: #333333; font-size: 16px; }
    .note {
      background-color: #e3f2fd;
      border: 2px solid steelblue;
      padding: 12px;
      margin: 20px;
    }
    #warning { color: crimson; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Science Exhibition</h2>
  <p>The exhibition is on Friday in the school hall.</p>
  <p class="note">Bring your model by Thursday evening.</p>
  <p id="warning">Do not touch the live circuits.</p>
  <p style="color: purple;">This line uses inline CSS.</p>
</body>
</html>`,
          },
          {
            type: "heading",
            text: "Which rule wins?",
          },
          {
            type: "text",
            md: "When two rules set the same property on one element, the browser follows the **cascade**. A more **specific** selector wins: an id beats a class, and a class beats an element selector. An inline style beats all three. If two rules are equally specific, the one written **later** wins.",
          },
          {
            type: "example",
            title: "Predict the colour",
            problem: "CSS: `p { color: blue; }`  `.tip { color: green; }`  `#t1 { color: orange; }`. What colour is the text of `<p class=\"tip\" id=\"t1\">` and of `<p class=\"tip\">`?",
            steps: [
              "All three rules match the first paragraph.",
              "Specificity: id (#t1) > class (.tip) > element (p). The id rule wins.",
              "The second paragraph has no id, so only `p` and `.tip` match. The class rule is more specific.",
            ],
            answer: "First paragraph: orange. Second paragraph: green.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "What colour is this paragraph's text?",
              emoji: "🎨",
              options: ["red", "blue", "green", "black"],
              answer: 0,
              trap: 2,
              explain: "Rules: `p { color: green; } .info { color: blue; }` and the tag `<p class=\"info\" style=\"color: red;\">`. The inline style is the most specific of all, so the text is **red**. Many pick green because the `p` rule came first, but order matters only when specificity is equal.",
            },
          },
          {
            type: "mistake",
            wrong: "To make text red, write `font-color: red;` or `text-color: red;`.",
            right: "The text colour property is simply `color: red;`. The background uses `background-color`.",
            why: "Other properties start with font- (font-size, font-family), so font-color looks right. The browser silently ignores a property it does not know, so the text just stays black and no error appears.",
          },
          {
            type: "text",
            md: "Every element is drawn as a box. The **box model** has four layers from inside out: the **content**, then **padding** (space inside the border), then the **border**, then **margin** (space outside the border, between this box and its neighbours).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which selector styles every element that has `class=\"box\"`?",
                options: [".box", "#box", "box", "*box"],
                answer: 0,
                explain: "A dot means class. A hash (#) means id. A bare word selects a tag name.",
              },
              {
                kind: "truefalse",
                q: "Padding is the space outside an element's border.",
                answer: false,
                explain: "Padding is *inside* the border; margin is outside it.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In code-writing answers, check the punctuation of each declaration: a **colon** between property and value and a **semicolon** at the end. Using `=` instead of `:` (as in HTML attributes) is the most common slip.",
          },
          {
            type: "keypoints",
            items: [
              "A CSS rule = selector + { property: value; }.",
              "Inline (style attribute) → internal (`<style>` in head) → external (.css file via `<link>`).",
              "Selectors: `p` element, `.name` class, `#name` id. Specificity: inline > id > class > element; ties go to the later rule.",
              "Box model: content, padding, border, margin.",
            ],
          },
        ],
        flashcards: [
          { front: "CSS", back: "Cascading Style Sheets: rules that control how HTML elements look." },
          { front: "Parts of a CSS rule", back: "Selector, then a declaration block: { property: value; }." },
          { front: "Three ways to add CSS", back: "Inline (style attribute), internal (`<style>` in head), external (.css file linked with `<link>`)." },
          { front: "Class vs id selector", back: "Class (.name) can be used on many elements; id (#name) is for one unique element." },
          { front: "Padding vs margin", back: "Padding is space inside the border; margin is space outside it." },
          { front: "Property for text colour", back: "`color` (not font-color)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which tag links an external style sheet?",
            options: ["`<link rel=\"stylesheet\" href=\"style.css\">`", "`<style src=\"style.css\">`", "`<css href=\"style.css\">`", "`<a href=\"style.css\">`"],
            answer: 0,
            explain: "External CSS is attached with `<link>` inside `<head>`.",
          },
          {
            kind: "mcq",
            q: "Which declaration is written correctly?",
            options: ["`color: blue;`", "`color = blue;`", "`color: blue,`", "`colour: blue;`"],
            answer: 0,
            explain: "Property, colon, value, semicolon. CSS uses the American spelling `color`.",
          },
          {
            kind: "fill",
            q: "The CSS property that sets the background colour is ___.",
            answer: ["background-color"],
            explain: "`background-color` sets the fill behind an element's content.",
          },
          {
            kind: "truefalse",
            q: "An id selector is more specific than a class selector.",
            answer: true,
            explain: "id > class > element. Only an inline style is more specific than an id.",
          },
          {
            kind: "order",
            q: "Order the layers of the box model from inside to outside.",
            items: ["content", "padding", "border", "margin"],
            explain: "Content sits in the middle, padding around it, then the border, then the margin outside.",
          },
          {
            kind: "mcq",
            q: "CSS: `h1 { color: blue; } h1 { color: green; }`. What colour are the h1 headings?",
            options: ["green", "blue", "black", "blue-green"],
            answer: 0,
            explain: "Both selectors are equally specific, so the rule written later wins.",
            difficulty: 2,
            hint: "Same specificity: look at the order.",
          },
          {
            kind: "multi",
            q: "Which of these are valid ways to apply CSS? (Choose all that apply)",
            options: ["A style attribute on a tag", "A `<style>` tag in the head", "A linked .css file", "A `<css>` tag in the body"],
            answers: [0, 1, 2],
            explain: "Inline, internal and external CSS. There is no `<css>` tag.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "cyber-ethics-and-safety",
    title: "Cyber Ethics and Safety",
    icon: "🛡️",
    description: "Netiquette, digital footprint, phishing, plagiarism, software licences, open source and the IT Act 2000.",
    lessons: [
      {
        slug: "cyber-ethics-safety",
        title: "Being Ethical and Safe Online",
        summary: "Netiquette, digital footprints, phishing and identity theft, plagiarism and intellectual property, software licences and open source, and the IT Act 2000.",
        minutes: 17,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "**Cyber ethics** are the rules of right and wrong behaviour when we use computers and the Internet. Good manners online are called **netiquette**: be polite, do not type in ALL CAPITALS (it reads like shouting), do not share other people's photos or messages without asking, and respect others' time and privacy.",
          },
          {
            type: "text",
            md: "Everything you do online leaves a trail called your **digital footprint**. An **active** footprint is what you post on purpose: comments, photos, reviews. A **passive** footprint is collected without you typing anything: websites you visit, your location, your search history. Colleges and employers may look at public posts, so think before you post. A good footprint can also help you, for example a coding project or a science blog.",
          },
          {
            type: "heading",
            text: "Staying safe",
          },
          {
            type: "text",
            md: "**Phishing** is a trick message (e-mail, SMS or chat) that pretends to be from a bank, shop or school to make you click a fake link or share passwords, PINs or OTPs. **Identity theft** is using someone else's personal details, such as their name, photos or Aadhaar number, to pretend to be them. **Cyberbullying** is hurting, threatening or embarrassing someone online. If it happens, keep screenshots, block the person, and tell a parent or teacher.",
          },
          {
            type: "example",
            title: "Checking a suspicious SMS",
            problem: "You get an SMS: \"Dear customer, your bank KYC expires TODAY. Your account will be blocked. Update now: bit.ly/kyc-upd8. Share the OTP you receive.\" How do you decide what to do?",
            steps: [
              "**Urgency and fear**: \"TODAY\" and \"blocked\" push you to act without thinking. That is a warning sign.",
              "**The link**: a short link hides the real address. A bank will not send KYC updates through random short links.",
              "**The OTP**: banks never ask customers to share an OTP, PIN or password with anyone.",
              "**Safe action**: do not click. Check by calling the number printed on your bank card or passbook, or by visiting the branch. Delete the SMS, and report it if you lost money.",
            ],
            answer: "It is a phishing message. Do not click or share the OTP; verify through the bank's official number.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A message asks you to share the OTP sent to your phone to \"claim a prize\". This is most likely:",
                options: ["Phishing", "Netiquette", "Plagiarism", "Open source"],
                answer: 0,
                explain: "Asking for an OTP or password through a message is a classic phishing sign.",
              },
            ],
          },
          {
            type: "heading",
            text: "Respecting other people's work",
          },
          {
            type: "text",
            md: "**Intellectual property** is a creation of the mind, such as a story, song, design, invention or software. The law protects it with **copyright** (for creative works and software), **patents** (for inventions) and **trademarks** (for brand names and logos).\n\n**Plagiarism** is copying someone else's words, ideas or work and presenting it as your own. Copying a paragraph from a website into your project without credit is plagiarism. Write in your own words and **cite the source**.",
          },
          {
            type: "table",
            headers: ["Kind of software", "Cost", "Can you see and change the source code?", "Examples"],
            rows: [
              ["**Proprietary**", "usually paid licence", "No", "Microsoft Windows, Adobe Photoshop"],
              ["**Freeware**", "free to use", "No", "many free mobile apps and media players"],
              ["**Shareware**", "free trial, pay to keep using", "No", "trial versions of some utilities"],
              ["**Open source / FOSS**", "usually free", "Yes, and you may share it", "Linux, LibreOffice, Mozilla Firefox, GIMP"],
            ],
          },
          {
            type: "text",
            md: "A **software licence** is the legal permission that says how you may use a program. Using or copying software against its licence is **software piracy**. **FOSS** stands for Free and Open Source Software: \"free\" here means *freedom* to use, study, change and share the code.",
          },
          {
            type: "mistake",
            wrong: "Freeware and open source software are the same, because both are free.",
            right: "Freeware only costs nothing. Open source software gives you the **source code** and the right to change and share it.",
            why: "Both are often free of cost, so they look alike. The difference is freedom, not price: a free app whose code is secret is freeware, not open source.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Open source or proprietary?",
              groups: ["Open source", "Proprietary"],
              items: [
                { text: "Linux", group: 0, hint: "Its source code is public and anyone may change it." },
                { text: "Microsoft Windows", group: 1, hint: "You buy a licence; the code is secret." },
                { text: "LibreOffice", group: 0, hint: "A free office suite whose code anyone can study." },
                { text: "Adobe Photoshop", group: 1, hint: "A paid licence with closed code." },
                { text: "Mozilla Firefox", group: 0, hint: "Its code is published by Mozilla." },
                { text: "GIMP", group: 0, hint: "A free image editor with open code." },
              ],
              explain: "The test is the **source code**: if you may see, change and share it, the software is open source. Price alone does not decide.",
            },
          },
          {
            type: "heading",
            text: "The law: IT Act 2000",
          },
          {
            type: "text",
            md: "The **Information Technology Act, 2000 (IT Act 2000)** is India's main law for the online world. It gives legal recognition to electronic records and **digital signatures**, which made e-commerce and online government services possible, and it lists **cyber crimes** with their punishments, such as hacking, identity theft, cheating by pretending to be someone else, and publishing obscene material. It was amended in 2008 to add more offences.\n\nIf you face cyber crime, you can report it on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call the helpline **1930**.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Short-answer questions often ask for the difference between pairs: **freeware vs open source**, **active vs passive footprint**, **copyright vs plagiarism**. Write one clear line for each side and one example. Remember the year of the IT Act: **2000**.",
          },
          {
            type: "keypoints",
            items: [
              "Netiquette = good manners online; your digital footprint can be active or passive.",
              "Phishing tricks you into sharing passwords or OTPs; never share an OTP and verify through official numbers.",
              "Plagiarism is presenting others' work as yours; cite sources. Copyright, patents and trademarks protect intellectual property.",
              "Proprietary, freeware, shareware, open source: open source means the code is available to study, change and share.",
              "The IT Act 2000 (amended 2008) recognises e-records and digital signatures and punishes cyber crimes.",
            ],
          },
        ],
        flashcards: [
          { front: "Netiquette", back: "Good manners and polite behaviour on the Internet." },
          { front: "Digital footprint", back: "The trail of data you leave online; active (what you post) and passive (data collected about you)." },
          { front: "Phishing", back: "A fake message that tricks people into sharing passwords, PINs or OTPs, or clicking harmful links." },
          { front: "Plagiarism", back: "Presenting someone else's work or ideas as your own without credit." },
          { front: "Open source software", back: "Software whose source code is available to use, study, change and share, e.g. Linux, LibreOffice." },
          { front: "IT Act 2000", back: "India's law that recognises electronic records and digital signatures and defines cyber crimes; amended in 2008." },
          { front: "Software piracy", back: "Copying, using or selling software against the terms of its licence." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is an example of a passive digital footprint?",
            options: ["A website storing your browsing history", "A photo you post", "A comment you write", "A product review you submit"],
            answer: 0,
            explain: "Passive footprints are collected without you posting anything, such as browsing history or location.",
          },
          {
            kind: "truefalse",
            q: "A bank may ask you to share your OTP by SMS to update your KYC.",
            answer: false,
            explain: "Banks never ask for OTPs, PINs or passwords. Such a message is phishing.",
          },
          {
            kind: "fill",
            q: "India's main law dealing with cyber crime and electronic records is the Information Technology Act, ___.",
            answer: ["2000"],
            explain: "The IT Act was passed in 2000 and amended in 2008.",
          },
          {
            kind: "mcq",
            q: "Riya copies three paragraphs from a website into her project without mentioning the source. This is:",
            options: ["Plagiarism", "Phishing", "Hacking", "Cyberbullying"],
            answer: 0,
            explain: "Using others' words as your own without credit is plagiarism. She should rewrite it in her own words and cite the site.",
          },
          {
            kind: "multi",
            q: "Which of these are open source software? (Choose all that apply)",
            options: ["Linux", "LibreOffice", "Mozilla Firefox", "Microsoft Windows"],
            answers: [0, 1, 2],
            explain: "Linux, LibreOffice and Firefox publish their source code. Windows is proprietary.",
          },
          {
            kind: "mcq",
            q: "A program is free to download, but its source code is secret. It is:",
            options: ["Freeware", "Open source", "Shareware", "Pirated software"],
            answer: 0,
            explain: "Free of cost but closed code = freeware. Open source would publish the code.",
            difficulty: 2,
            hint: "Free price is not the same as free code.",
          },
          {
            kind: "order",
            q: "Put the safe steps in order when you receive a suspicious link.",
            items: ["Pause and do not click the link", "Look for warning signs (urgency, odd link, request for OTP)", "Verify using the official website or number", "Delete or report the message"],
            explain: "Stop, check the signs, verify through an official source, then delete or report.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/* ================================================================== */
/* ICSE Computer Applications (Java)                                   */
/* ================================================================== */

const icse: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "java-basics-revision",
    title: "Revision: Java Basics",
    icon: "☕",
    description: "Tokens, data types, operators, Scanner input, decisions and loops from Class 9, revised.",
    lessons: [
      {
        slug: "tokens-types-operators",
        title: "Tokens, Data Types and Operators",
        summary: "The five kinds of tokens, rules for identifiers, the eight primitive types, type conversion, and how Java evaluates operators like ++, / and %.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A sentence is made of words and punctuation. A Java program is made of **tokens**: the smallest pieces that mean something to the compiler. There are five kinds: **keywords** (reserved words like `int`, `class`, `if`), **identifiers** (names you choose for variables, methods and classes), **literals** (fixed values like `25`, `3.5`, `'A'`, `\"Hello\"`, `true`), **operators** (`+`, `==`, `&&`) and **separators** or punctuators (`;` `,` `( )` `{ }` `[ ]`).",
          },
          {
            type: "list",
            items: [
              "An identifier may contain letters, digits, the underscore `_` and the dollar sign, but **must not start with a digit**.",
              "It cannot contain spaces or other symbols such as `-`, `#` or `@`.",
              "It cannot be a **keyword** (`int`, `class`, `void`) or the literals `true`, `false`, `null`.",
              "Java is **case-sensitive**: `marks` and `Marks` are two different names.",
            ],
          },
          {
            type: "table",
            headers: ["Primitive type", "Size", "Stores", "Example literal"],
            rows: [
              ["`byte`", "1 byte", "small whole numbers (−128 to 127)", "`100`"],
              ["`short`", "2 bytes", "whole numbers", "`2000`"],
              ["`int`", "4 bytes", "whole numbers (the default integer type)", "`45000`"],
              ["`long`", "8 bytes", "very large whole numbers", "`9876543210L`"],
              ["`float`", "4 bytes", "decimals, about 7 digits", "`3.5f`"],
              ["`double`", "8 bytes", "decimals, about 15 digits (the default decimal type)", "`3.14159`"],
              ["`char`", "2 bytes", "one Unicode character", "`'A'`"],
              ["`boolean`", "(true/false only)", "a truth value", "`true`"],
            ],
          },
          {
            type: "text",
            md: "**Type conversion** changes a value from one type to another. **Implicit** conversion (widening) is done automatically when a smaller type goes into a bigger one: `double d = 5;` stores 5.0. **Explicit** conversion, or **type casting**, is written by you when going from a bigger type to a smaller one: `int n = (int) 7.9;` stores 7 (the decimal part is cut off, not rounded).",
          },
          {
            type: "example",
            title: "Dry run: ++, / and %",
            problem: "Find the exact output of the program below.",
            steps: [
              "`a = 5`. In `a++ + ++a`, Java works left to right. `a++` (**postfix**) uses 5, then makes a = 6.",
              "`++a` (**prefix**) first makes a = 7, then uses 7. So b = 5 + 7 = 12, and a is now 7.",
              "`17 / 5`: both are int, so this is **integer division**: c = 3 (the remainder is dropped).",
              "`17 % 5` gives the **remainder**: d = 2. `17 / 5.0` has a double, so e = 3.4.",
            ],
            answer: "a = 7\nb = 12\nc = 3, d = 2\ne = 3.4",
          },
          {
            type: "code",
            lang: "java",
            caption: "Increment.java",
            code: `public class Increment
{
    public static void main(String[] args)
    {
        int a = 5;
        int b = a++ + ++a;
        int c = 17 / 5;
        int d = 17 % 5;
        double e = 17 / 5.0;
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c + ", d = " + d);
        System.out.println("e = " + e);
    }
}`,
          },
          {
            type: "table",
            headers: ["Step", "Expression part", "Value used", "a after"],
            rows: [
              ["1", "`int a = 5;`", "-", "5"],
              ["2", "`a++`", "5", "6"],
              ["3", "`++a`", "7", "7"],
              ["4", "`b = 5 + 7`", "12", "7"],
            ],
          },
          {
            type: "mistake",
            wrong: "`7 / 2` gives 3.5 in Java.",
            right: "`7 / 2` gives **3**, because both operands are int. Write `7 / 2.0` or `(double) 7 / 2` to get 3.5.",
            why: "In maths 7 ÷ 2 is 3.5, so it feels obvious. But when both sides are integers, Java does integer division and throws away the remainder. Storing the answer in a double does not help: `double x = 7 / 2;` gives 3.0.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Valid or invalid Java identifier?",
              groups: ["Valid", "Invalid"],
              items: [
                { text: "total_marks", group: 0, hint: "Letters and underscore are allowed." },
                { text: "2ndRank", group: 1, hint: "An identifier cannot start with a digit." },
                { text: "_count", group: 0, hint: "Starting with an underscore is allowed." },
                { text: "class", group: 1, hint: "class is a keyword." },
                { text: "my marks", group: 1, hint: "Spaces are not allowed." },
                { text: "Sum1", group: 0, hint: "Digits are fine after the first character." },
                { text: "net-pay", group: 1, hint: "The minus sign is an operator, not part of a name." },
              ],
              explain: "Start with a letter, _ (or the dollar sign); no spaces or symbols like - and #; never a keyword.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is the value of `(int) 9.99`?",
                options: ["9", "10", "9.99", "Error"],
                answer: 0,
                explain: "Casting to int cuts off the decimal part. It does not round.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "Section A has many \"give the output\" questions with `++`, `--`, `/` and `%`. Show a tiny working line (like `5 + 7 = 12`) beside your answer. Also learn the difference between `=` (assignment) and `==` (comparison): mixing them is a common error.",
          },
          {
            type: "keypoints",
            items: [
              "Tokens: keywords, identifiers, literals, operators, separators.",
              "Eight primitive types: byte, short, int, long, float, double, char, boolean.",
              "Widening is automatic; narrowing needs a cast and cuts off decimals.",
              "Postfix `a++` uses then changes; prefix `++a` changes then uses.",
              "int / int is integer division; % gives the remainder.",
            ],
          },
        ],
        flashcards: [
          { front: "Token", back: "The smallest meaningful unit of a program: keyword, identifier, literal, operator or separator." },
          { front: "The eight primitive types", back: "byte, short, int, long, float, double, char, boolean." },
          { front: "Size of char in Java", back: "2 bytes (it stores a Unicode character)." },
          { front: "Implicit vs explicit conversion", back: "Implicit (widening) is automatic, e.g. int to double. Explicit (casting) is written by the programmer, e.g. (int) 7.9." },
          { front: "a++ vs ++a", back: "a++ uses the old value then adds 1; ++a adds 1 then uses the new value." },
          { front: "Result of 17 % 5", back: "2, the remainder." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a valid identifier?",
            options: ["`rollNo`", "`roll no`", "`1roll`", "`int`"],
            answer: 0,
            explain: "`roll no` has a space, `1roll` starts with a digit and `int` is a keyword.",
          },
          {
            kind: "numeric",
            q: "What is the value of `25 % 7`?",
            answer: 4,
            explain: "25 = 7 × 3 + 4, so the remainder is 4.",
          },
          {
            kind: "mcq",
            q: "`int x = 4; int y = ++x * 2;` What are x and y?",
            options: ["x = 5, y = 10", "x = 4, y = 8", "x = 5, y = 8", "x = 4, y = 10"],
            answer: 0,
            explain: "Prefix ++ makes x = 5 first, then y = 5 × 2 = 10.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The size of a `double` in Java is ___ bytes.",
            answer: ["8", "eight"],
            explain: "double takes 8 bytes; float takes 4.",
          },
          {
            kind: "truefalse",
            q: "`double d = 9 / 2;` stores 4.5 in d.",
            answer: false,
            explain: "9 / 2 is integer division giving 4; widening then stores 4.0.",
            difficulty: 2,
            hint: "Look at the types before the result is stored.",
          },
          {
            kind: "multi",
            q: "Which of these are keywords in Java? (Choose all that apply)",
            options: ["`static`", "`void`", "`main`", "`String`"],
            answers: [0, 1],
            explain: "`static` and `void` are keywords. `main` is a method name and `String` is a class name; both are identifiers.",
            difficulty: 3,
            hint: "A keyword is reserved by the language itself.",
          },
          {
            kind: "order",
            q: "Order these integer types from smallest to largest size.",
            items: ["byte", "short", "int", "long"],
            explain: "1, 2, 4 and 8 bytes.",
          },
        ],
      },
      {
        slug: "input-decisions-loops",
        title: "Input, Decisions and Loops",
        summary: "Take input with Scanner, choose with if-else and switch, repeat with for, while and do-while, and trace a digit-sum loop.",
        minutes: 17,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Programs become useful when they take **input**, make **decisions** and **repeat** work. In ICSE programs, input comes from the **Scanner** class of the package `java.util`.",
          },
          {
            type: "table",
            headers: ["Scanner method", "Reads"],
            rows: [
              ["`nextInt()`", "an int"],
              ["`nextDouble()`", "a double"],
              ["`next()`", "one word (stops at a space)"],
              ["`nextLine()`", "a whole line, including spaces"],
              ["`next().charAt(0)`", "a single character"],
            ],
          },
          {
            type: "text",
            md: "**Decisions**: `if`, `if-else` and `if-else-if` test a condition. `switch` compares one value with several `case` labels; each case normally ends with `break`.\n\n**Loops**: `for` and `while` are **entry-controlled**: the condition is checked before the body, so the body may run zero times. `do-while` is **exit-controlled**: the body runs first, so it always runs **at least once**. `break` leaves a loop; `continue` skips to the next round.",
          },
          {
            type: "example",
            title: "Dry run: sum of digits",
            problem: "The program below is run and the user enters 472. Trace it and give the exact output.",
            steps: [
              "Start: n = 472, sum = 0. Each round, `n % 10` takes the last digit and `n / 10` removes it.",
              "Round 1: d = 2, sum = 2, n = 47. Round 2: d = 7, sum = 9, n = 4.",
              "Round 3: d = 4, sum = 13, n = 0. Now `n > 0` is false, so the loop stops.",
              "The prompt is printed with `print`, so the answer appears on the same line after the typed input.",
            ],
            answer: "Enter a number: 472\nSum of digits = 13",
          },
          {
            type: "code",
            lang: "java",
            caption: "DigitSum.java",
            code: `import java.util.Scanner;

public class DigitSum
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int sum = 0;
        while (n > 0)
        {
            int d = n % 10;
            sum = sum + d;
            n = n / 10;
        }
        System.out.println("Sum of digits = " + sum);
    }
}`,
          },
          {
            type: "table",
            headers: ["Round", "n (start)", "d = n % 10", "sum", "n = n / 10"],
            rows: [
              ["1", "472", "2", "2", "47"],
              ["2", "47", "7", "9", "4"],
              ["3", "4", "4", "13", "0"],
              ["stop", "0", "-", "13", "-"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which loop always runs its body at least once?",
                options: ["do-while", "while", "for", "None of them"],
                answer: 0,
                explain: "do-while checks the condition after the body, so it is exit-controlled.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In a switch, only the matching case runs, even without `break`.",
            right: "Without `break`, Java **falls through** and runs every case below the match until it meets a `break` or the end.",
            why: "It feels like each case is a separate box. In fact the cases are just entry points into one block. With `case 1` missing its break, entering 1 prints both \"Monday\" and \"Tuesday\".",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the lines of the input program in order.",
              items: [
                "import java.util.Scanner;",
                "public class Square {",
                "public static void main(String[] args) {",
                "Scanner sc = new Scanner(System.in);",
                "int n = sc.nextInt();",
                "System.out.println(n * n); } }",
              ],
              explain: "The import comes before the class. Inside main, create the Scanner object before you call nextInt(), and use n only after it has been read.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "Section B programs must use **Scanner** input unless the question gives fixed values. Write meaningful variable names (mnemonic codes) or a short variable description, as the paper asks for the logic to be clear. Missing `import java.util.*;` or `import java.util.Scanner;` is a common slip.",
          },
          {
            type: "keypoints",
            items: [
              "Scanner (java.util): nextInt, nextDouble, next, nextLine; next().charAt(0) for a char.",
              "switch cases need break, or execution falls through.",
              "for and while are entry-controlled; do-while is exit-controlled and runs at least once.",
              "n % 10 gives the last digit; n / 10 removes it.",
            ],
          },
        ],
        flashcards: [
          { front: "Package of the Scanner class", back: "java.util" },
          { front: "next() vs nextLine()", back: "next() reads one word; nextLine() reads the whole line including spaces." },
          { front: "Entry-controlled loops", back: "for and while: the condition is tested before the body." },
          { front: "Exit-controlled loop", back: "do-while: the body runs first, so it runs at least once." },
          { front: "Fall through", back: "In switch, without break, the cases below the matching one also run." },
          { front: "break vs continue", back: "break leaves the loop; continue skips the rest of this round and goes to the next." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which statement reads a whole sentence such as \"New Delhi\"?",
            options: ["`sc.nextLine()`", "`sc.next()`", "`sc.nextInt()`", "`sc.nextChar()`"],
            answer: 0,
            explain: "next() would stop at the space after \"New\". There is no nextChar() method in Scanner.",
          },
          {
            kind: "numeric",
            q: "How many times does this loop print? `for (int i = 1; i <= 10; i += 3) System.out.println(i);`",
            answer: 4,
            explain: "i takes the values 1, 4, 7, 10, so it prints 4 times.",
            difficulty: 2,
            hint: "List the values of i until the condition fails.",
          },
          {
            kind: "truefalse",
            q: "A while loop whose condition is false at the start runs its body once.",
            answer: false,
            explain: "while is entry-controlled; if the condition is false at the start, the body runs zero times.",
          },
          {
            kind: "mcq",
            q: "`int x = 2; switch (x) { case 1: System.out.print(\"A\"); case 2: System.out.print(\"B\"); case 3: System.out.print(\"C\"); break; default: System.out.print(\"D\"); }` What is printed?",
            options: ["BC", "B", "BCD", "ABC"],
            answer: 0,
            explain: "It enters at case 2, prints B, falls through to case 3, prints C, then breaks.",
            difficulty: 3,
            hint: "Find where it enters, then follow until a break.",
          },
          {
            kind: "fill",
            q: "To read one character from the user, write `char ch = sc.next().___(0);`",
            answer: ["charAt"],
            explain: "next() reads a word and charAt(0) takes its first character.",
          },
          {
            kind: "numeric",
            q: "Using the DigitSum program, what is printed as the sum if the user enters 9050?",
            answer: 14,
            explain: "9 + 0 + 5 + 0 = 14.",
          },
          {
            kind: "multi",
            q: "Which of these are entry-controlled loops? (Choose all that apply)",
            options: ["for", "while", "do-while"],
            answers: [0, 1],
            explain: "for and while test first; do-while tests at the end.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "class-as-basis-of-computation",
    title: "Class as the Basis of all Computation",
    icon: "🏭",
    description: "Objects with state and behaviour, the class as an object factory and user-defined type, and primitive vs composite types.",
    lessons: [
      {
        slug: "objects-and-classes",
        title: "Objects, Classes and Composite Types",
        summary: "Objects have state and behaviour; a class is the blueprint and object factory; a class is a composite, user-defined data type; objects are made with new.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🍪",
            caption: "One cookie cutter can make hundreds of cookies. Each cookie has its own toppings, but they all share the same shape.",
          },
          {
            type: "text",
            md: "In the real world, an **object** is anything with **characteristics** and **behaviour**. A mobile phone has a brand, colour and battery level (characteristics) and it can call, ring and charge (behaviour).\n\nIn Java, an object's characteristics are its **state**, stored in **data members** (instance variables), and its behaviour is given by **member methods** (functions).",
          },
          {
            type: "text",
            md: "A **class** is a blueprint or template that describes what every object of that kind will have and do. Because many objects can be produced from one class, a class is called an **object factory**. Each object made from a class is an **instance** of that class.\n\nA class also creates a new **user-defined data type**. Since it groups several values of possibly different types (a String name and an int marks) into one unit, it is a **composite data type**, also called a **reference type**.",
          },
          {
            type: "table",
            headers: ["Primitive (fundamental) type", "Composite (reference) type"],
            rows: [
              ["built into Java: byte, short, int, long, float, double, char, boolean", "made from other types: classes, arrays, String, interfaces"],
              ["holds one single value", "can hold many values (members)"],
              ["the variable stores the value itself", "the variable stores a **reference** (address) to an object"],
              ["fixed size", "size depends on its members"],
            ],
          },
          {
            type: "example",
            title: "Two objects from one class",
            problem: "Trace the program below and give its exact output.",
            steps: [
              "`new Student()` runs twice, so two separate objects are made. s1 and s2 are **references** to them.",
              "`s1.setData(\"Ananya\", 92)` fills s1's own name and marks. `s2.setData(\"Rohit\", 85)` fills s2's.",
              "`s2.marks = s2.marks + 5;` changes only s2: 85 + 5 = 90. s1 is not affected.",
              "`display()` on each object prints that object's state.",
            ],
            answer: "Ananya scored 92\nRohit scored 90",
          },
          {
            type: "code",
            lang: "java",
            caption: "Student.java",
            code: `public class Student
{
    String name;
    int marks;

    void setData(String n, int m)
    {
        name = n;
        marks = m;
    }

    void display()
    {
        System.out.println(name + " scored " + marks);
    }

    public static void main(String[] args)
    {
        Student s1 = new Student();
        Student s2 = new Student();
        s1.setData("Ananya", 92);
        s2.setData("Rohit", 85);
        s2.marks = s2.marks + 5;
        s1.display();
        s2.display();
    }
}`,
          },
          {
            type: "table",
            headers: ["After line", "s1.name", "s1.marks", "s2.name", "s2.marks"],
            rows: [
              ["both `new` lines", "null", "0", "null", "0"],
              ["`s1.setData(...)`", "Ananya", "92", "null", "0"],
              ["`s2.setData(...)`", "Ananya", "92", "Rohit", "85"],
              ["`s2.marks = s2.marks + 5`", "Ananya", "92", "Rohit", "90"],
            ],
          },
          {
            type: "mistake",
            wrong: "`Student s1;` creates a Student object.",
            right: "`Student s1;` only declares a **reference** variable. The object is created, and memory given to its data, only by `new Student()`.",
            why: "With primitives, `int x;` really does make room for an int, so it seems the same. For classes, the variable is just a label that can point to an object; until `new` runs, there is no object to point to.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Primitive type or reference (composite) type?",
              groups: ["Primitive", "Reference"],
              items: [
                { text: "int", group: 0, hint: "One of the eight built-in types." },
                { text: "String", group: 1, hint: "String is a class." },
                { text: "char", group: 0, hint: "Built-in, holds one character." },
                { text: "Student (your own class)", group: 1, hint: "Every class is a user-defined reference type." },
                { text: "double", group: 0, hint: "Built-in decimal type." },
                { text: "int[] (an array)", group: 1, hint: "An array is an object, even if its elements are int." },
                { text: "boolean", group: 0, hint: "Built-in true/false type." },
                { text: "Scanner", group: 1, hint: "Scanner is a library class." },
              ],
              explain: "Only the eight built-in types are primitive. Classes (String, Scanner, your own) and arrays are reference types: the variable holds the address of an object.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "Since a class is used to create many objects, it is called an object ___.",
                answer: ["factory"],
                explain: "A class is an object factory: one blueprint, many instances.",
              },
              {
                kind: "truefalse",
                q: "An object is an instance of a class.",
                answer: true,
                explain: "Each object created with new is one instance of its class.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "\"Why is a class called an object factory?\" and \"Why is a class a composite data type?\" are frequent 2-mark questions. Give the reason in one line each: *it produces many objects of the same kind*; *it combines members of different types into one unit*.",
          },
          {
            type: "keypoints",
            items: [
              "An object has state (data members) and behaviour (member methods).",
              "A class is a blueprint and an object factory; an object is an instance of a class.",
              "A class is a user-defined, composite (reference) data type.",
              "`new` creates the object; the variable only holds a reference to it.",
            ],
          },
        ],
        flashcards: [
          { front: "Object", back: "An entity with state (data members) and behaviour (member methods); an instance of a class." },
          { front: "Class", back: "A blueprint that defines the data and methods common to a set of objects." },
          { front: "Why is a class an object factory?", back: "Because many objects of the same kind can be created from one class." },
          { front: "Composite data type", back: "A type built from other types, e.g. a class or array; it can hold several values." },
          { front: "Role of `new`", back: "Allocates memory for a new object and returns a reference to it." },
          { front: "Instance variable", back: "A data member of which every object has its own separate copy." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In the class Student, `name` and `marks` are:",
            options: ["Data members (instance variables)", "Member methods", "Keywords", "Local variables of main"],
            answer: 0,
            explain: "They are declared in the class, outside any method, so each object gets its own copy.",
          },
          {
            kind: "mcq",
            q: "Which statement creates an object of class Car?",
            options: ["`Car c = new Car();`", "`Car c;`", "`new c = Car();`", "`Car = new c();`"],
            answer: 0,
            explain: "`Car c;` only declares a reference. `new Car()` creates the object.",
          },
          {
            kind: "truefalse",
            q: "A class is a primitive data type.",
            answer: false,
            explain: "A class is a user-defined composite (reference) type.",
          },
          {
            kind: "multi",
            q: "Which of these are reference types? (Choose all that apply)",
            options: ["String", "an array of int", "int", "char"],
            answers: [0, 1],
            explain: "String and arrays are objects. int and char are primitive.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Each object made from a class is called an ___ of that class.",
            answer: ["instance"],
            explain: "Object and instance mean the same thing here.",
          },
          {
            kind: "mcq",
            q: "In the Student program, if `s1.marks = 50;` were added before `s1.display();`, what would s2.display() print?",
            options: ["Rohit scored 90", "Rohit scored 50", "Ananya scored 50", "Rohit scored 85"],
            answer: 0,
            explain: "s1 and s2 are separate objects with separate instance variables. Changing s1 does not change s2.",
            difficulty: 2,
            hint: "Each object has its own copy of marks.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "user-defined-methods",
    title: "User-defined Methods",
    icon: "🧩",
    description: "Method definition, prototype and signature, parameters, return, call by value and reference, pure and impure methods, overloading.",
    lessons: [
      {
        slug: "methods-parameters-overloading",
        title: "Methods, Parameters and Overloading",
        summary: "Define and call methods, tell actual from formal parameters, see call by value vs call by reference, pure vs impure and static vs non-static methods, and overload a method.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A **method** (function) is a named block of code that does one job. You write it once and **call** (invoke) it whenever you need it. This keeps programs short, avoids repeating code and makes them easier to test.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Parts of a method definition",
            code: `// access    modifier  return  name    parameter list
   public     static    int     sum    (int a, int b)
{
    int s = a + b;      // method body
    return s;           // sends the value back to the caller
}`,
          },
          {
            type: "table",
            headers: ["Term", "Meaning", "For sum above"],
            rows: [
              ["**Method prototype** (header)", "the first line of the definition", "`public static int sum(int a, int b)`"],
              ["**Method signature**", "the method name with its parameter list", "`sum(int a, int b)`"],
              ["**Return type**", "type of value sent back; `void` if nothing", "`int`"],
              ["**Formal parameters**", "variables in the definition that receive values", "`a`, `b`"],
              ["**Actual parameters** (arguments)", "values passed in the call", "in `sum(4, 9)`: `4`, `9`"],
            ],
          },
          {
            type: "text",
            md: "**Call by value**: for primitive types, the method receives a *copy* of the value. Changing the formal parameter does not change the caller's variable.\n\n**Call by reference**: for objects and arrays, the method receives a copy of the *reference*, so it works on the *same* object. Changes it makes to that object are seen by the caller.",
          },
          {
            type: "code",
            lang: "java",
            caption: "ChangeTest.java",
            code: `public class ChangeTest
{
    static void change(int x, int arr[])
    {
        x = x + 10;
        arr[0] = arr[0] + 10;
    }

    public static void main(String[] args)
    {
        int n = 5;
        int a[] = {5, 6};
        change(n, a);
        System.out.println(n + " " + a[0]);
    }
}`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Predict the output of ChangeTest.",
              emoji: "🔮",
              options: ["5 15", "15 15", "5 5", "15 5"],
              answer: 0,
              trap: 1,
              explain: "n is an int, so x gets a copy: n stays **5** (call by value). The array is passed by reference, so arr[0] and a[0] are the same box: it becomes **15**. Output: `5 15`.",
            },
          },
          {
            type: "text",
            md: "A **pure method** does not change the state of the object (its data members); it usually just returns a value, like a getter. An **impure method** changes the state of the object, like a setter. A **static** method belongs to the class and is called without an object (`Math.sqrt(16)`); a **non-static** (instance) method needs an object (`s1.display()`).",
          },
          {
            type: "heading",
            text: "Method overloading",
          },
          {
            type: "text",
            md: "**Method overloading** means writing several methods with the **same name** but **different parameter lists** (different number, type or order of parameters) in one class. Java picks the right one by matching the arguments. It is one way Java shows **polymorphism** (\"one name, many forms\").",
          },
          {
            type: "example",
            title: "Overloaded area()",
            problem: "Trace the program below and give its exact output.",
            steps: [
              "`ob.area(2.0)`: the argument is a double, so `area(double r)` runs: 3.14 × 2.0 × 2.0 = 12.56.",
              "`ob.area(5)`: one int argument matches `area(int side)`: 5 × 5 = 25.",
              "`ob.area(4, 3)`: two int arguments match `area(int l, int b)`: 4 × 3 = 12.",
            ],
            answer: "Circle: 12.56\nSquare: 25\nRectangle: 12",
          },
          {
            type: "code",
            lang: "java",
            caption: "Shape.java",
            code: `public class Shape
{
    double area(double r)
    {
        return 3.14 * r * r;
    }

    int area(int side)
    {
        return side * side;
    }

    int area(int l, int b)
    {
        return l * b;
    }

    public static void main(String[] args)
    {
        Shape ob = new Shape();
        System.out.println("Circle: " + ob.area(2.0));
        System.out.println("Square: " + ob.area(5));
        System.out.println("Rectangle: " + ob.area(4, 3));
    }
}`,
          },
          {
            type: "mistake",
            wrong: "`int find(int a)` and `double find(int a)` are two overloaded methods.",
            right: "That is a **compile-time error**. Overloaded methods must differ in their **parameter list**; a different return type alone is not enough.",
            why: "The return type is part of the prototype, so it seems to make the methods different. But a call like `find(3)` gives Java no way to choose between them, because the call does not show the return type.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In the call `sum(4, 9)`, the values 4 and 9 are:",
                options: ["Actual parameters", "Formal parameters", "Return values", "Data members"],
                answer: 0,
                explain: "Values in the call are actual parameters (arguments). The variables in the definition are formal parameters.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "Overloading programs are a regular Section B question. Write each method with exactly the parameter types asked and write a `main` (or say the methods are called from main) only if the question asks for it. Do not print inside a method that is supposed to **return** a value.",
          },
          {
            type: "keypoints",
            items: [
              "Prototype = first line; signature = name + parameter list.",
              "Formal parameters are in the definition; actual parameters are in the call.",
              "Primitives are passed by value (copy); objects and arrays by reference.",
              "Pure methods do not change object state; impure methods do.",
              "Overloading: same name, different parameter lists; return type alone is not enough.",
            ],
          },
        ],
        flashcards: [
          { front: "Method signature", back: "The method name together with its parameter list, e.g. sum(int a, int b)." },
          { front: "Method prototype", back: "The first line (header) of a method definition, with access specifier, return type, name and parameters." },
          { front: "Formal vs actual parameters", back: "Formal: variables in the method definition. Actual: values passed in the call." },
          { front: "Call by value", back: "A copy of a primitive value is passed; changes inside the method do not affect the caller." },
          { front: "Pure method", back: "A method that does not change the state of the object; e.g. a getter that only returns a value." },
          { front: "Method overloading", back: "Several methods with the same name but different parameter lists in the same class." },
          { front: "What does `void` mean?", back: "The method returns no value." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which keyword sends a value back from a method to its caller?",
            options: ["return", "void", "break", "static"],
            answer: 0,
            explain: "`return` ends the method and sends the value back. `void` means no value is returned.",
          },
          {
            kind: "mcq",
            q: "Which pair is a valid example of overloading?",
            options: ["`void show(int a)` and `void show(char c)`", "`int show(int a)` and `double show(int a)`", "`void show(int a)` and `void show(int b)`", "`void show()` and `void Show()`"],
            answer: 0,
            explain: "Different parameter types make a valid overload. Option 2 differs only in return type, option 3 only in the parameter's name, and option 4 has two different names (Java is case-sensitive).",
            difficulty: 3,
            hint: "Look only at the parameter types.",
          },
          {
            kind: "truefalse",
            q: "When an array is passed to a method, changes to its elements inside the method are seen by the caller.",
            answer: true,
            explain: "Arrays are passed by reference, so the method works on the same array.",
          },
          {
            kind: "fill",
            q: "A method that changes the state of an object is called an ___ method.",
            answer: ["impure"],
            explain: "Impure methods (mutators) change data members; pure methods do not.",
          },
          {
            kind: "mcq",
            q: "What is the signature of `public static double avg(int a, int b, int c)`?",
            options: ["`avg(int a, int b, int c)`", "`public static double avg`", "`double avg`", "`public static double avg(int a, int b, int c)`"],
            answer: 0,
            explain: "The signature is the name plus the parameter list. The whole line is the prototype.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "With `int twice(int x) { x = x * 2; return x; }`, what is n after `int n = 6; twice(n);`?",
            answer: 6,
            explain: "n is passed by value and the returned value is not stored, so n stays 6.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Two overloaded methods can differ in: (Choose all that apply)",
            options: ["The number of parameters", "The types of parameters", "The order of parameter types", "Only the return type"],
            answers: [0, 1, 2],
            explain: "Any difference in the parameter list works. The return type alone does not.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "constructors",
    title: "Constructors",
    icon: "🏗️",
    description: "What a constructor is, default and parameterised constructors, constructor overloading, the this keyword, and constructor vs method.",
    lessons: [
      {
        slug: "constructors-types-overloading",
        title: "Default, Parameterised and Overloaded Constructors",
        summary: "Characteristics of constructors, the default constructor, parameterised constructors, the this keyword, constructor overloading and how constructors differ from methods.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "When a new student joins school, the office fills in a form straight away: name, class, roll number. A **constructor** does the same for an object: it is a special member method that **initialises** the object's data members at the moment the object is created.",
          },
          {
            type: "list",
            items: [
              "It has the **same name as the class**.",
              "It has **no return type**, not even `void`.",
              "It is **called automatically** when an object is created with `new`.",
              "It is usually declared `public` so objects can be created from other classes.",
              "It cannot be declared `static`.",
            ],
          },
          {
            type: "table",
            headers: ["Kind", "Parameters", "Example header"],
            rows: [
              ["**Default** (non-parameterised) constructor", "none", "`Book()`"],
              ["**Parameterised** constructor", "one or more", "`Book(String t, double p)`"],
            ],
          },
          {
            type: "text",
            md: "If you write **no constructor at all**, Java supplies a default constructor, and the instance variables keep their **default values**: 0 for int, 0.0 for double, `false` for boolean, `null` for String and other objects, and the null character for char. Once you write any constructor yourself, Java no longer supplies this one.\n\nWhen a parameter has the same name as a data member, use the keyword **this**: `this.title = title;`. Here `this.title` is the object's data member and `title` is the parameter. `this` always refers to the **current object**.",
          },
          {
            type: "example",
            title: "Constructor overloading",
            problem: "Trace the program below and give its exact output.",
            steps: [
              "**Constructor overloading** means a class has more than one constructor, each with a different parameter list.",
              "`new Book()` has no arguments, so the default constructor runs: title = \"Unknown\", price = 0.0.",
              "`new Book(\"Wings of Fire\", 250.0)` matches `Book(String, double)`: `this.title` and `this.price` get the arguments.",
              "`show()` prints each object. A double always prints with a decimal point, so 0.0 and 250.0.",
            ],
            answer: "Unknown : Rs. 0.0\nWings of Fire : Rs. 250.0",
          },
          {
            type: "code",
            lang: "java",
            caption: "Book.java",
            code: `public class Book
{
    String title;
    double price;

    Book()
    {
        title = "Unknown";
        price = 0.0;
    }

    Book(String title, double price)
    {
        this.title = title;
        this.price = price;
    }

    void show()
    {
        System.out.println(title + " : Rs. " + price);
    }

    public static void main(String[] args)
    {
        Book b1 = new Book();
        Book b2 = new Book("Wings of Fire", 250.0);
        b1.show();
        b2.show();
    }
}`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "When is a constructor called?",
                options: ["Automatically, when an object is created with new", "Only when you call it by name like a method", "When the program ends", "Each time any method of the object is called"],
                answer: 0,
                explain: "`new` creates the object and runs the matching constructor once for it.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Write the constructor as `void Book() { ... }` because it returns nothing.",
            right: "Write `Book() { ... }` with **no** return type. With `void`, it becomes an ordinary method that happens to share the class name, and it will not run on `new Book()`.",
            why: "Methods that return nothing are marked void, so it feels right. But a constructor is not a method that returns nothing: it has no return type at all, and that is how Java recognises it.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is this true of a constructor or of a method?",
              groups: ["Constructor", "Method"],
              items: [
                { text: "Must have the same name as the class", group: 0, hint: "Only constructors are tied to the class name." },
                { text: "Has a return type such as int or void", group: 1, hint: "Constructors have no return type." },
                { text: "Runs automatically when new creates the object", group: 0, hint: "You never call it by name with the dot operator." },
                { text: "Can be called many times on the same object", group: 1, hint: "A constructor runs only once per object." },
                { text: "Can be declared static", group: 1, hint: "Constructors cannot be static." },
                { text: "Used to initialise data members of a new object", group: 0, hint: "That is its whole purpose." },
              ],
              explain: "A constructor: class name, no return type, called once and automatically by `new`, for initialisation. A method: any name, a return type, called as often as needed.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "\"Differentiate between a constructor and a method\" is a common 2-mark question. Give two clear points: name (same as class vs any name) and return type (none vs must have one). In programs, initialise every data member inside the constructor the question asks for.",
          },
          {
            type: "keypoints",
            items: [
              "A constructor has the class's name, no return type, and runs automatically on `new`.",
              "Default constructor: no parameters. Parameterised: takes values.",
              "If no constructor is written, Java supplies one and members keep default values (0, 0.0, false, null).",
              "Constructor overloading = several constructors with different parameter lists.",
              "`this` refers to the current object; `this.x = x;` separates the member from the parameter.",
            ],
          },
        ],
        flashcards: [
          { front: "Constructor", back: "A member method with the same name as the class, no return type, called automatically when an object is created." },
          { front: "Default constructor", back: "A constructor with no parameters." },
          { front: "Parameterised constructor", back: "A constructor that takes parameters to initialise data members with given values." },
          { front: "Constructor overloading", back: "More than one constructor in a class, each with a different parameter list." },
          { front: "`this` keyword", back: "A reference to the current object." },
          { front: "Default value of a String data member", back: "null" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which is a correct constructor for class `Pen`?",
            options: ["`Pen() { }`", "`void Pen() { }`", "`int Pen() { }`", "`static Pen() { }`"],
            answer: 0,
            explain: "A constructor has no return type and cannot be static.",
          },
          {
            kind: "truefalse",
            q: "A class can have more than one constructor.",
            answer: true,
            explain: "That is constructor overloading; the parameter lists must differ.",
          },
          {
            kind: "fill",
            q: "The keyword that refers to the current object is ___.",
            answer: ["this"],
            explain: "`this` is the reference to the object whose constructor or method is running.",
          },
          {
            kind: "mcq",
            q: "A class has `int roll; double fee;` and no constructor. After `new`, what are roll and fee?",
            options: ["0 and 0.0", "null and null", "garbage values", "1 and 1.0"],
            answer: 0,
            explain: "Data members get default values: 0 for int, 0.0 for double. Java never leaves garbage in instance variables.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "In `Book(String title, double price) { title = title; }`, what happens to the data member title?",
            options: ["It is not changed; the parameter is assigned to itself", "It gets the parameter's value", "Compile-time error", "It becomes null always"],
            answer: 0,
            explain: "Inside the constructor, `title` means the parameter, so the line copies it to itself. Write `this.title = title;` to set the member.",
            difficulty: 3,
            hint: "Which title does the bare name refer to inside the constructor?",
          },
          {
            kind: "multi",
            q: "Which are characteristics of a constructor? (Choose all that apply)",
            options: ["Same name as the class", "No return type", "Called automatically on object creation", "Must be static"],
            answers: [0, 1, 2],
            explain: "A constructor cannot be static; the other three are its defining features.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "library-classes",
    title: "Library Classes",
    icon: "📚",
    description: "Packages, wrapper classes, parsing strings to numbers, Character class methods, autoboxing and unboxing.",
    lessons: [
      {
        slug: "wrapper-classes-character-methods",
        title: "Wrapper Classes and Character Methods",
        summary: "Java packages, the eight wrapper classes, parseInt and parseDouble, Character methods like isDigit and toUpperCase, and autoboxing and unboxing.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Java comes with thousands of ready-made classes, called **library classes**, grouped into **packages**. `java.lang` (String, Math, the wrapper classes) is imported automatically. `java.util` (Scanner) and `java.io` must be imported with `import`.",
          },
          {
            type: "text",
            md: "A **wrapper class** wraps a primitive value inside an object. Each primitive type has one. Wrapper classes are needed when an object is required instead of a primitive, and they provide useful methods, such as converting a String to a number.",
          },
          {
            type: "table",
            headers: ["Primitive", "Wrapper class", "Useful method"],
            rows: [
              ["`byte`", "`Byte`", "`Byte.parseByte(\"12\")`"],
              ["`short`", "`Short`", "`Short.parseShort(\"300\")`"],
              ["`int`", "`Integer`", "`Integer.parseInt(\"25\")` → 25"],
              ["`long`", "`Long`", "`Long.parseLong(\"98765\")`"],
              ["`float`", "`Float`", "`Float.parseFloat(\"2.5\")`"],
              ["`double`", "`Double`", "`Double.parseDouble(\"3.75\")` → 3.75"],
              ["`char`", "`Character`", "`Character.isDigit('7')` → true"],
              ["`boolean`", "`Boolean`", "`Boolean.parseBoolean(\"true\")`"],
            ],
          },
          {
            type: "table",
            headers: ["Character method", "Returns", "Example"],
            rows: [
              ["`isLetter(ch)`", "boolean", "`isLetter('g')` → true"],
              ["`isDigit(ch)`", "boolean", "`isDigit('g')` → false"],
              ["`isLetterOrDigit(ch)`", "boolean", "`isLetterOrDigit('#')` → false"],
              ["`isWhitespace(ch)`", "boolean", "`isWhitespace(' ')` → true"],
              ["`isUpperCase(ch)` / `isLowerCase(ch)`", "boolean", "`isUpperCase('K')` → true"],
              ["`toUpperCase(ch)` / `toLowerCase(ch)`", "char", "`toUpperCase('k')` → 'K'"],
            ],
          },
          {
            type: "text",
            md: "**Autoboxing** is Java's automatic conversion of a primitive into its wrapper object: `Integer obj = 25;`. **Unboxing** is the reverse: `int n = obj;`. Before autoboxing, programmers had to write these conversions themselves.",
          },
          {
            type: "example",
            title: "Counting letters, digits and spaces",
            problem: "Trace the program below and give its exact output.",
            steps: [
              "The string \"Room 204 B\" has 10 characters: R, o, o, m, space, 2, 0, 4, space, B.",
              "Letters: R, o, o, m, B = 5. Digits: 2, 0, 4 = 3. Spaces: 2.",
              "`Integer.parseInt(\"204\")` turns the text \"204\" into the int 204, so total = 204 + 6 = 210.",
              "`Integer boxed = total;` autoboxes 210; `int back = boxed;` unboxes it; back + 1 = 211.",
            ],
            answer: "Letters = 5\nDigits = 3\nSpaces = 2\nTotal = 210\n211",
          },
          {
            type: "code",
            lang: "java",
            caption: "CharCount.java",
            code: `public class CharCount
{
    public static void main(String[] args)
    {
        String s = "Room 204 B";
        int letters = 0, digits = 0, spaces = 0;
        for (int i = 0; i < s.length(); i++)
        {
            char ch = s.charAt(i);
            if (Character.isLetter(ch))
                letters++;
            else if (Character.isDigit(ch))
                digits++;
            else if (Character.isWhitespace(ch))
                spaces++;
        }
        System.out.println("Letters = " + letters);
        System.out.println("Digits = " + digits);
        System.out.println("Spaces = " + spaces);
        int total = Integer.parseInt("204") + 6;
        System.out.println("Total = " + total);
        Integer boxed = total;
        int back = boxed;
        System.out.println(back + 1);
    }
}`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "What does this line print?",
              emoji: "🧮",
              options: ["20", "128", "12 8", "Error"],
              answer: 0,
              trap: 1,
              explain: "`System.out.println(Integer.parseInt(\"12\") + Integer.parseInt(\"8\"));` parseInt turns both strings into ints, so + adds them: **20**. Without parseInt, `\"12\" + \"8\"` would join the strings to make \"128\".",
            },
          },
          {
            type: "mistake",
            wrong: "`Character.toUpperCase(ch);` changes ch to a capital letter.",
            right: "It **returns** the capital letter and leaves ch unchanged. Store the result: `ch = Character.toUpperCase(ch);`.",
            why: "The method name sounds like an action on ch. But char is a primitive passed by value; the method can only hand back a new value, which is lost if you do not store or print it.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which package is imported automatically in every Java program?",
                options: ["java.lang", "java.util", "java.io", "java.awt"],
                answer: 0,
                explain: "java.lang holds String, Math and the wrapper classes and needs no import.",
              },
              {
                kind: "fill",
                q: "Automatically converting an int into an Integer object is called ___.",
                answer: ["autoboxing", "auto-boxing", "boxing"],
                explain: "Autoboxing wraps the primitive; unboxing takes it out again.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "In \"give the output\" questions, note the **return type**: `Character.isDigit` returns true or false, while `Character.toUpperCase` returns a char. Also, `Integer.parseInt(\"12.5\")` does not give 12; it throws a NumberFormatException because \"12.5\" is not a whole number.",
          },
          {
            type: "keypoints",
            items: [
              "Library classes are grouped in packages; java.lang is imported by default.",
              "Eight wrapper classes: Byte, Short, Integer, Long, Float, Double, Character, Boolean.",
              "parseInt / parseDouble convert a String to a number.",
              "Character methods test (isLetter, isDigit, isWhitespace, isUpperCase) or convert (toUpperCase, toLowerCase).",
              "Autoboxing: primitive → wrapper object; unboxing: wrapper object → primitive.",
            ],
          },
        ],
        flashcards: [
          { front: "Wrapper class", back: "A class that wraps a primitive value in an object, e.g. Integer for int." },
          { front: "Wrapper class of char", back: "Character" },
          { front: "Integer.parseInt(\"45\")", back: "Converts the String \"45\" to the int 45." },
          { front: "Autoboxing", back: "Automatic conversion of a primitive into its wrapper object." },
          { front: "Unboxing", back: "Automatic conversion of a wrapper object back into its primitive." },
          { front: "Character.isLetterOrDigit('#')", back: "false" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is the wrapper class of int?",
            options: ["Integer", "Int", "Number", "Long"],
            answer: 0,
            explain: "The wrapper for int is Integer, and for char it is Character; the others are just capitalised names.",
          },
          {
            kind: "mcq",
            q: "What does `Character.isUpperCase('m')` return?",
            options: ["false", "true", "'M'", "'m'"],
            answer: 0,
            explain: "is... methods return a boolean. 'm' is lowercase, so false.",
          },
          {
            kind: "numeric",
            q: "What is printed by `System.out.println(Double.parseDouble(\"2.5\") * 4);`?",
            answer: 10,
            explain: "2.5 × 4 = 10.0. Java prints 10.0 because the result is a double.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "`Integer x = 10;` is an example of unboxing.",
            answer: false,
            explain: "A primitive 10 is being wrapped into an Integer object: that is autoboxing.",
          },
          {
            kind: "fill",
            q: "`Character.toLowerCase('Q')` returns ___.",
            answer: ["q", "'q'"],
            explain: "It returns the lowercase form of the character.",
          },
          {
            kind: "multi",
            q: "Which of these return a boolean? (Choose all that apply)",
            options: ["`Character.isDigit(ch)`", "`Character.isWhitespace(ch)`", "`Character.toUpperCase(ch)`", "`Integer.parseInt(s)`"],
            answers: [0, 1],
            explain: "Methods starting with is return true or false. toUpperCase returns a char and parseInt returns an int.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "encapsulation",
    title: "Encapsulation",
    icon: "💊",
    description: "Wrapping data and methods into a class, data hiding with private, access specifiers and the scope of variables.",
    lessons: [
      {
        slug: "access-specifiers-scope",
        title: "Access Specifiers and Scope of Variables",
        summary: "Encapsulation and data hiding, private, default, protected and public access, getters and setters, and instance, class, local and argument variables.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🏧",
            caption: "At an ATM you can deposit and withdraw, but you can never open the machine and change the cash count yourself.",
          },
          {
            type: "text",
            md: "**Encapsulation** is the wrapping up of data and the methods that work on that data into a single unit, the **class**. Usually the data is made **private** so that code outside the class cannot change it directly. This is **data hiding**. Outside code must go through **public** methods, which can check that every change is sensible.",
          },
          {
            type: "table",
            headers: ["Access specifier", "Same class", "Same package", "Subclass in another package", "Any other class"],
            rows: [
              ["`private`", "Yes", "No", "No", "No"],
              ["default (no keyword)", "Yes", "Yes", "No", "No"],
              ["`protected`", "Yes", "Yes", "Yes", "No"],
              ["`public`", "Yes", "Yes", "Yes", "Yes"],
            ],
          },
          {
            type: "example",
            title: "A bank account that protects its balance",
            problem: "Trace the program below and give its exact output.",
            steps: [
              "`new Account(\"Meera\")` runs the constructor: holder = Meera, balance = 0.0, and the **static** count becomes 1.",
              "`deposit(500)`: 500 > 0, so balance = 500.0.",
              "`deposit(-200)`: the check fails, so it prints \"Invalid amount\" and balance stays 500.0.",
              "`deposit(300)`: balance = 800.0. `getBalance()` returns 800.0; `Account.count` is 1.",
            ],
            answer: "Invalid amount\nBalance = 800.0\nAccounts = 1",
          },
          {
            type: "code",
            lang: "java",
            caption: "Account.java",
            code: `public class Account
{
    private String holder;
    private double balance;
    static int count = 0;

    public Account(String h)
    {
        holder = h;
        balance = 0.0;
        count++;
    }

    public void deposit(double amt)
    {
        if (amt > 0)
            balance = balance + amt;
        else
            System.out.println("Invalid amount");
    }

    public double getBalance()
    {
        return balance;
    }

    public static void main(String[] args)
    {
        Account a = new Account("Meera");
        a.deposit(500);
        a.deposit(-200);
        a.deposit(300);
        System.out.println("Balance = " + a.getBalance());
        System.out.println("Accounts = " + Account.count);
    }
}`,
          },
          {
            type: "text",
            md: "`getBalance()` is a **getter** (accessor): it reads a private value. `deposit()` acts as a **setter** (mutator): it changes the value, but only after checking it. If another class wrote `a.balance = -5000;`, the compiler would reject it, because balance is private.",
          },
          {
            type: "heading",
            text: "Scope of variables",
          },
          {
            type: "table",
            headers: ["Variable", "Declared", "Lives for", "In Account"],
            rows: [
              ["**Instance variable**", "in the class, without static", "as long as its object; one copy per object", "`holder`, `balance`"],
              ["**Class variable**", "in the class, with `static`", "the whole program; one copy shared by all objects", "`count`"],
              ["**Local variable**", "inside a method or block", "only until that method or block ends", "`a` in main"],
              ["**Argument variable**", "in a method's parameter list", "only while the method runs", "`amt`, `h`"],
            ],
          },
          {
            type: "mistake",
            wrong: "If balance is private, the balance cannot be used from outside the class at all.",
            right: "Outside code cannot touch balance **directly**, but it can use it through public methods such as `getBalance()` and `deposit()`.",
            why: "\"Private\" sounds like \"locked forever\". Encapsulation is not about hiding data from use; it is about forcing every use to go through methods that the class controls and checks.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "In Account.java, what kind of variable is each one?",
              groups: ["Instance", "Class (static)", "Local or argument"],
              items: [
                { text: "balance", group: 0, hint: "Declared in the class without static; each account has its own." },
                { text: "count", group: 1, hint: "Declared static, so all objects share one copy." },
                { text: "amt in deposit()", group: 2, hint: "It is a parameter of the method." },
                { text: "holder", group: 0, hint: "Each object stores its own holder's name." },
                { text: "a in main()", group: 2, hint: "Declared inside main, it ends when main ends." },
                { text: "h in the constructor", group: 2, hint: "A parameter, alive only while the constructor runs." },
              ],
              explain: "Where it is declared decides the kind: in the class without static → instance; with static → class variable; inside a method or its brackets → local or argument.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which access specifier makes a member visible only inside its own class?",
                options: ["private", "protected", "public", "default"],
                answer: 0,
                explain: "private is the most restrictive. default allows the whole package.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "In Section B class programs, the question often says \"data members are private\". Use the exact specifier and member names given, and access private members only through the class's own methods. Marks are lost for changing the names or types in the question.",
          },
          {
            type: "keypoints",
            items: [
              "Encapsulation = wrapping data and methods into one class; data hiding = making data private.",
              "private (class) < default (package) < protected (package + subclasses) < public (everywhere).",
              "Getters read private data; setters change it with checks.",
              "Instance variables: one per object. Class (static) variables: one shared copy. Local and argument variables: only inside their method.",
            ],
          },
        ],
        flashcards: [
          { front: "Encapsulation", back: "Wrapping data and the methods that use it into a single unit, the class." },
          { front: "Data hiding", back: "Making data members private so they can be accessed only through the class's methods." },
          { front: "Four access levels", back: "private, default (no keyword), protected, public." },
          { front: "protected access", back: "Same class, same package, and subclasses in other packages." },
          { front: "Class variable", back: "A static data member; one copy shared by all objects of the class." },
          { front: "Local variable", back: "Declared inside a method or block; exists only until it ends." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A member with no access specifier is visible in:",
            options: ["Its own class and the same package", "Its own class only", "Every class everywhere", "Subclasses in other packages only"],
            answer: 0,
            explain: "Default (package) access allows the same package but not outside it.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "All objects of a class share one copy of a static variable.",
            answer: true,
            explain: "A static (class) variable belongs to the class, not to any one object.",
          },
          {
            kind: "order",
            q: "Order the access specifiers from most restrictive to least restrictive.",
            items: ["private", "default", "protected", "public"],
            explain: "Each level adds more classes that can see the member.",
          },
          {
            kind: "fill",
            q: "A method that only reads and returns the value of a private data member is called a ___ (or accessor).",
            answer: ["getter", "get method"],
            explain: "Getters (accessors) read; setters (mutators) change.",
          },
          {
            kind: "mcq",
            q: "In Account, what is printed if main also calls `a.deposit(0);` once more before printing?",
            options: ["Invalid amount is printed twice and balance stays 800.0", "Balance becomes 0.0", "Balance becomes 800.0 with no message", "Compile-time error"],
            answer: 0,
            explain: "0 is not greater than 0, so the else part prints \"Invalid amount\" again and balance does not change.",
            difficulty: 3,
            hint: "Check the condition amt > 0 with amt = 0.",
          },
          {
            kind: "multi",
            q: "Which statements about encapsulation are true? (Choose all that apply)",
            options: ["It binds data and methods into one unit", "It allows data hiding using private", "It means a class has no methods", "It lets the class check changes to its data"],
            answers: [0, 1, 3],
            explain: "Encapsulation needs methods; they are the controlled way in to the hidden data.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "arrays",
    title: "Arrays",
    icon: "🗃️",
    description: "Single and double dimensional arrays, linear and binary search, and bubble and selection sort.",
    lessons: [
      {
        slug: "arrays-and-searching",
        title: "Arrays, Linear Search and Binary Search",
        summary: "Declare, initialise and fill a single dimensional array, use length and indexes, and search it with linear search and binary search.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "To store the marks of 40 students you would need 40 variables. An **array** solves this: it is a group of variables of the **same type**, under **one name**, stored together. Each value is an **element**, reached by its **index** (subscript) in square brackets.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Ways to create a single dimensional array",
            code: `int marks[] = new int[5];          // 5 ints, each starts as 0
double price[] = {45.5, 12.0, 99.9}; // declared and initialised
String city[] = {"Pune", "Agra", "Kochi"};

marks[0] = 78;                      // first element
marks[4] = 91;                      // last element (index 4)
System.out.println(marks.length);   // prints 5`,
          },
          {
            type: "list",
            items: [
              "Indexes run from **0 to length − 1**. An array of 5 has indexes 0, 1, 2, 3, 4.",
              "`length` is a property of the array, written **without brackets**: `marks.length`.",
              "Using an index outside this range (like `marks[5]`) causes **ArrayIndexOutOfBoundsException** when the program runs.",
              "Input is taken in a loop: `for (int i = 0; i < a.length; i++) a[i] = sc.nextInt();`",
            ],
          },
          {
            type: "heading",
            text: "Linear search",
          },
          {
            type: "text",
            md: "**Linear search** checks the elements one by one from the start until it finds the value (the **key**) or reaches the end. It works on any array, sorted or not.",
          },
          {
            type: "code",
            lang: "java",
            caption: "LinearSearch.java (sample input: 8 3 15 6 11, then 15; output: Found at index 2)",
            code: `import java.util.Scanner;

public class LinearSearch
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int a[] = new int[5];
        System.out.println("Enter 5 numbers:");
        for (int i = 0; i < a.length; i++)
            a[i] = sc.nextInt();
        System.out.print("Enter number to search: ");
        int key = sc.nextInt();
        int pos = -1;
        for (int i = 0; i < a.length; i++)
        {
            if (a[i] == key)
            {
                pos = i;
                break;
            }
        }
        if (pos == -1)
            System.out.println("Not found");
        else
            System.out.println("Found at index " + pos);
    }
}`,
          },
          {
            type: "heading",
            text: "Binary search",
          },
          {
            type: "text",
            md: "**Binary search** works only on a **sorted** array. It looks at the middle element. If that is the key, it stops. If the key is bigger, it throws away the left half; if smaller, the right half. Each step halves the part left to search, so it is much faster on big arrays.",
          },
          {
            type: "code",
            lang: "java",
            caption: "BinarySearch.java",
            code: `import java.util.Scanner;

public class BinarySearch
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int a[] = {5, 12, 19, 27, 34, 41, 58};
        System.out.print("Enter number to search: ");
        int key = sc.nextInt();
        int low = 0, high = a.length - 1, pos = -1;
        while (low <= high)
        {
            int mid = (low + high) / 2;
            if (a[mid] == key)
            {
                pos = mid;
                break;
            }
            else if (a[mid] < key)
                low = mid + 1;
            else
                high = mid - 1;
        }
        if (pos == -1)
            System.out.println("Not found");
        else
            System.out.println("Found at index " + pos);
    }
}`,
          },
          {
            type: "example",
            title: "Dry run of binary search",
            problem: "Trace BinarySearch for key = 41, then for key = 20. Give the output each time.",
            steps: [
              "Key 41: low = 0, high = 6 → mid = 3, a[3] = 27 < 41, so low = 4.",
              "low = 4, high = 6 → mid = 5, a[5] = 41 = key, so pos = 5 and the loop breaks.",
              "Key 20: mid = 3 (27 > 20) → high = 2; mid = 1 (12 < 20) → low = 2; mid = 2 (19 < 20) → low = 3.",
              "Now low = 3 > high = 2, so the loop ends with pos = −1.",
            ],
            answer: "Key 41 → Enter number to search: Found at index 5\nKey 20 → Enter number to search: Not found",
          },
          {
            type: "table",
            headers: ["Key", "low", "high", "mid", "a[mid]", "Action"],
            rows: [
              ["41", "0", "6", "3", "27", "27 < 41 → low = 4"],
              ["41", "4", "6", "5", "41", "found, pos = 5"],
              ["20", "0", "6", "3", "27", "27 > 20 → high = 2"],
              ["20", "0", "2", "1", "12", "12 < 20 → low = 2"],
              ["20", "2", "2", "2", "19", "19 < 20 → low = 3; low > high, stop"],
            ],
          },
          {
            type: "mistake",
            wrong: "Binary search can be used on any array; it is just faster.",
            right: "Binary search works **only on a sorted array**. On an unsorted array it may say \"Not found\" even when the value is there. Use linear search, or sort first.",
            why: "The method throws away half the array after one comparison. That is safe only if every smaller value is on the left and every bigger value is on the right, which is true only when the array is sorted.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps of one round of binary search.",
              items: [
                "Find mid = (low + high) / 2",
                "Compare a[mid] with the key",
                "If equal, record the position and stop",
                "If a[mid] < key, set low = mid + 1",
                "Otherwise set high = mid − 1 and repeat while low <= high",
              ],
              explain: "Each round finds the middle, compares, and either stops or discards half of the array by moving low or high.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "For `int a[] = new int[8];`, what is the index of the last element?",
                answer: 7,
                explain: "Indexes go from 0 to length − 1 = 7.",
              },
              {
                kind: "truefalse",
                q: "Linear search needs the array to be sorted.",
                answer: false,
                explain: "Linear search checks every element, so order does not matter. Binary search needs a sorted array.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "Search programs are frequent in Section B. Print a clear message for **both** cases (found / not found). A common error is printing \"Not found\" inside the loop, which prints it many times; use a position or flag variable and decide after the loop.",
          },
          {
            type: "keypoints",
            items: [
              "An array holds many values of one type under one name; indexes run 0 to length − 1.",
              "`a.length` (no brackets) gives the size; a bad index throws ArrayIndexOutOfBoundsException.",
              "Linear search: check one by one; works on any array.",
              "Binary search: compare with the middle and halve the range; the array must be sorted.",
            ],
          },
        ],
        flashcards: [
          { front: "Array", back: "A collection of variables of the same type, under one name, accessed by index." },
          { front: "First and last index of an array of size n", back: "0 and n − 1." },
          { front: "length of an array", back: "A property, written a.length without brackets." },
          { front: "ArrayIndexOutOfBoundsException", back: "The run-time error when an index is below 0 or at least the length." },
          { front: "Linear search", back: "Checks elements one by one from the start; works on unsorted arrays." },
          { front: "Condition for binary search", back: "The array must be sorted." },
          { front: "mid in binary search", back: "(low + high) / 2, using integer division." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which statement correctly gives the size of array `a`?",
            options: ["`a.length`", "`a.length()`", "`a.size()`", "`length(a)`"],
            answer: 0,
            explain: "For arrays, length is a property, not a method. `length()` with brackets is for Strings.",
          },
          {
            kind: "mcq",
            q: "`int x[] = {4, 8, 15, 16, 23};` What is `x[1] + x[3]`?",
            options: ["24", "23", "19", "31"],
            answer: 0,
            explain: "x[1] = 8 and x[3] = 16 (counting from 0), so 8 + 16 = 24.",
            difficulty: 2,
            hint: "Index 0 is the first element.",
          },
          {
            kind: "numeric",
            q: "In binary search on a sorted array of 7 elements (indexes 0 to 6), which index is checked first?",
            answer: 3,
            explain: "mid = (0 + 6) / 2 = 3.",
          },
          {
            kind: "truefalse",
            q: "Binary search on the array {7, 2, 9, 4} may fail to find 9.",
            answer: true,
            explain: "The array is not sorted, so binary search can discard the wrong half.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "In binary search, if a[mid] is smaller than the key, the new value of low is ___.",
            answer: ["mid + 1", "mid+1"],
            explain: "The key must be to the right of mid, so low moves to mid + 1.",
          },
          {
            kind: "numeric",
            q: "In the BinarySearch program, how many times is mid calculated when searching for 58?",
            answer: 3,
            explain: "mid = 3 (27 < 58, low = 4), mid = 5 (41 < 58, low = 6), mid = 6 (58 found). So 3 times.",
            difficulty: 3,
            hint: "Write a low / high / mid table.",
          },
          {
            kind: "multi",
            q: "Which statements are true? (Choose all that apply)",
            options: ["`int a[] = new int[5];` sets every element to 0", "An array can hold values of different types", "Linear search works on unsorted arrays", "Array indexes start at 1"],
            answers: [0, 2],
            explain: "int elements start at 0. An array holds one type only, and indexes start at 0.",
          },
        ],
      },
      {
        slug: "sorting-and-2d-arrays",
        title: "Bubble Sort, Selection Sort and 2D Arrays",
        summary: "Sort an array with bubble sort and selection sort, trace each pass, and use double dimensional arrays with nested loops.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "**Sorting** means arranging elements in order: **ascending** (smallest first) or **descending** (largest first). ICSE asks for two methods: **bubble sort** and **selection sort**. Both use two nested loops; they differ in how they move elements.",
          },
          {
            type: "text",
            md: "**Bubble sort** compares each pair of **adjacent** elements and swaps them if they are in the wrong order. After the first pass, the largest element has \"bubbled\" to the last place. Each pass fixes one more element at the end, so an array of n elements needs at most n − 1 passes.",
          },
          {
            type: "code",
            lang: "java",
            caption: "BubbleSort.java (output: 1 2 4 5 )",
            code: `public class BubbleSort
{
    public static void main(String[] args)
    {
        int a[] = {5, 1, 4, 2};
        int n = a.length;
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - 1 - i; j++)
            {
                if (a[j] > a[j + 1])
                {
                    int t = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = t;
                }
            }
        }
        for (int i = 0; i < n; i++)
            System.out.print(a[i] + " ");
        System.out.println();
    }
}`,
          },
          {
            type: "table",
            headers: ["Pass", "Comparisons (swap?)", "Array after the pass"],
            rows: [
              ["start", "-", "5 1 4 2"],
              ["1", "5,1 swap; 5,4 swap; 5,2 swap", "1 4 2 5"],
              ["2", "1,4 no; 4,2 swap", "1 2 4 5"],
              ["3", "1,2 no", "1 2 4 5"],
            ],
          },
          {
            type: "text",
            md: "**Selection sort** finds the **smallest** element in the unsorted part and swaps it into the first unsorted place. Pass 1 puts the smallest at index 0, pass 2 puts the next smallest at index 1, and so on. It makes at most one swap per pass.",
          },
          {
            type: "example",
            title: "Dry run of selection sort",
            problem: "Sort {29, 10, 14, 37, 13} in ascending order using the selection sort program below. Show the array after each pass and give the output.",
            steps: [
              "Pass 1 (i = 0): smallest of all is 10 at index 1. Swap with index 0 → 10 29 14 37 13.",
              "Pass 2 (i = 1): smallest of 29 14 37 13 is 13 at index 4. Swap with index 1 → 10 13 14 37 29.",
              "Pass 3 (i = 2): smallest of 14 37 29 is 14, already at index 2 (it is swapped with itself) → 10 13 14 37 29.",
              "Pass 4 (i = 3): smallest of 37 29 is 29 at index 4. Swap → 10 13 14 29 37. n − 1 = 4 passes are done.",
            ],
            answer: "10 13 14 29 37 (each number followed by a space)",
          },
          {
            type: "code",
            lang: "java",
            caption: "SelectionSort.java",
            code: `public class SelectionSort
{
    public static void main(String[] args)
    {
        int a[] = {29, 10, 14, 37, 13};
        int n = a.length;
        for (int i = 0; i < n - 1; i++)
        {
            int min = i;
            for (int j = i + 1; j < n; j++)
            {
                if (a[j] < a[min])
                    min = j;
            }
            int t = a[i];
            a[i] = a[min];
            a[min] = t;
        }
        for (int i = 0; i < n; i++)
            System.out.print(a[i] + " ");
        System.out.println();
    }
}`,
          },
          {
            type: "mistake",
            wrong: "In bubble sort the inner loop can run `for (int j = 0; j < n; j++)` and compare `a[j]` with `a[j + 1]`.",
            right: "The inner loop must stop at `j < n - 1 - i` (or at least `j < n - 1`), because `a[j + 1]` must still be inside the array.",
            why: "Looping j up to n − 1 looks natural since that is the last index. But when j = n − 1, `a[j + 1]` is `a[n]`, which does not exist, so the program stops with ArrayIndexOutOfBoundsException.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Bubble sort or selection sort?",
              groups: ["Bubble sort", "Selection sort"],
              items: [
                { text: "Compares neighbours a[j] and a[j + 1]", group: 0, hint: "Adjacent pairs are its trademark." },
                { text: "Finds the index of the smallest element in each pass", group: 1, hint: "It keeps a min index." },
                { text: "The largest element reaches the end after pass 1 (ascending)", group: 0, hint: "Big values bubble to the right." },
                { text: "At most one swap per pass", group: 1, hint: "It swaps only once, after finding the minimum." },
                { text: "May swap many times in one pass", group: 0, hint: "Every out-of-order pair is swapped." },
                { text: "Smallest element is at index 0 after pass 1", group: 1, hint: "It selects the minimum and puts it first." },
              ],
              explain: "Bubble sort swaps neighbours and pushes the largest to the end. Selection sort selects the smallest and swaps it to the front, once per pass.",
            },
          },
          {
            type: "heading",
            text: "Double dimensional arrays",
          },
          {
            type: "text",
            md: "A **double dimensional (2D) array** stores values in **rows and columns**, like a table. `int m[][] = new int[3][4];` has 3 rows and 4 columns (12 elements). `m[r][c]` is the element in row r, column c, both counted from 0. Nested loops are used: the outer loop for rows and the inner loop for columns.",
          },
          {
            type: "code",
            lang: "java",
            caption: "RowSum.java (output: Row 0 sum = 9, then Row 1 sum = 10, on separate lines)",
            code: `public class RowSum
{
    public static void main(String[] args)
    {
        int m[][] = {{3, 5, 1}, {4, 0, 6}};
        for (int r = 0; r < 2; r++)
        {
            int sum = 0;
            for (int c = 0; c < 3; c++)
                sum = sum + m[r][c];
            System.out.println("Row " + r + " sum = " + sum);
        }
    }
}`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many elements does `int t[][] = new int[4][5];` hold?",
                answer: 20,
                explain: "4 rows × 5 columns = 20 elements.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "If the question says \"sort in descending order\", change only the comparison: `a[j] < a[j + 1]` for bubble sort, or look for the **largest** in selection sort. Examiners check that you use the method named in the question; a bubble sort answer to a selection sort question loses most of the marks.",
          },
          {
            type: "keypoints",
            items: [
              "Bubble sort: compare and swap adjacent elements; the largest moves to the end each pass.",
              "Selection sort: find the smallest in the unsorted part and swap it to the front; one swap per pass.",
              "Both take n − 1 passes for n elements.",
              "2D array `int m[][] = new int[r][c];` uses `m[i][j]` and nested loops.",
            ],
          },
        ],
        flashcards: [
          { front: "Bubble sort", back: "Repeatedly compares adjacent elements and swaps them if they are out of order." },
          { front: "Selection sort", back: "Each pass selects the smallest remaining element and swaps it into the next position." },
          { front: "Number of passes for n elements", back: "n − 1." },
          { front: "Swapping two elements", back: "t = a[i]; a[i] = a[j]; a[j] = t; using a temporary variable." },
          { front: "Change bubble sort to descending", back: "Swap when a[j] < a[j + 1]." },
          { front: "Elements in int m[][] = new int[3][4]", back: "12 (3 rows × 4 columns)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "After the first pass of bubble sort (ascending) on {9, 3, 7, 1}, the array is:",
            options: ["3 7 1 9", "1 3 7 9", "3 9 7 1", "1 9 3 7"],
            answer: 0,
            explain: "9,3 swap → 3 9 7 1; 9,7 swap → 3 7 9 1; 9,1 swap → 3 7 1 9. The largest reaches the end.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "After the first pass of selection sort (ascending) on {9, 3, 7, 1}, the array is:",
            options: ["1 3 7 9", "3 7 1 9", "1 9 3 7", "3 9 7 1"],
            answer: 0,
            explain: "The smallest, 1, is swapped with 9 at index 0: 1 3 7 9. (Here one pass happens to sort it completely.)",
            difficulty: 2,
            hint: "Find the minimum and swap it with the first element.",
          },
          {
            kind: "numeric",
            q: "How many passes does bubble sort (as in the program) make for an array of 10 elements?",
            answer: 9,
            explain: "The outer loop runs from i = 0 to i < n − 1, which is 9 passes.",
          },
          {
            kind: "truefalse",
            q: "Selection sort makes at most one swap in each pass.",
            answer: true,
            explain: "It finds the minimum first, then swaps it once into place.",
          },
          {
            kind: "fill",
            q: "In `int m[][] = new int[3][4];`, the element in the last row and last column is m[2][___].",
            answer: ["3"],
            explain: "Columns are numbered 0 to 3, so the last column is index 3.",
          },
          {
            kind: "order",
            q: "Put the three lines that swap a[j] and a[j + 1] in order.",
            items: ["int t = a[j];", "a[j] = a[j + 1];", "a[j + 1] = t;"],
            explain: "Save a[j] first, overwrite it, then put the saved value in a[j + 1].",
          },
          {
            kind: "multi",
            q: "Which are true of the bubble sort program? (Choose all that apply)",
            options: ["It uses nested loops", "It compares adjacent elements", "It needs the array to be sorted first", "It needs a temporary variable to swap"],
            answers: [0, 1, 3],
            explain: "Sorting does not need a sorted array; that requirement belongs to binary search.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "string-handling",
    title: "String Handling",
    icon: "🔤",
    description: "String class methods and programs that process strings character by character and word by word.",
    lessons: [
      {
        slug: "string-methods",
        title: "String Class Methods",
        summary: "Create Strings and use length, charAt, indexOf, lastIndexOf, substring, toUpperCase, replace, equals, equalsIgnoreCase, compareTo, trim and more.",
        minutes: 17,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A **String** is a sequence of characters, such as a name or a sentence, written in double quotes: `String s = \"Kolkata\";`. String is a class in `java.lang`, so a String variable is a reference type. Each character has an index starting at **0**, just like an array.\n\nStrings are **immutable**: once created, a String object can never change. Methods like `toUpperCase()` do not alter s; they **return a new String**.",
          },
          {
            type: "table",
            headers: ["Method", "Returns", "With s = \"Kolkata\""],
            rows: [
              ["`length()`", "int: number of characters", "7"],
              ["`charAt(i)`", "char at index i", "`charAt(3)` → 'k'"],
              ["`indexOf(ch)`", "int: first index of ch, or −1", "`indexOf('a')` → 4"],
              ["`lastIndexOf(ch)`", "int: last index of ch, or −1", "`lastIndexOf('a')` → 6"],
              ["`substring(b, e)`", "String from index b up to **e − 1**", "`substring(2, 5)` → \"lka\""],
              ["`substring(b)`", "String from b to the end", "`substring(4)` → \"ata\""],
              ["`toUpperCase()` / `toLowerCase()`", "new String", "\"KOLKATA\" / \"kolkata\""],
              ["`replace(a, b)`", "new String with every a changed to b", "`replace('a', 'o')` → \"Kolkoto\""],
              ["`concat(t)`", "s joined with t", "`concat(\" city\")` → \"Kolkata city\""],
              ["`trim()`", "copy with leading and trailing spaces removed", "`\"  hi  \".trim()` → \"hi\""],
              ["`startsWith(t)` / `endsWith(t)`", "boolean", "`startsWith(\"Kol\")` → true"],
            ],
          },
          {
            type: "table",
            headers: ["Comparison method", "Returns", "Example"],
            rows: [
              ["`equals(t)`", "true if exactly the same, case included", "`s.equals(\"kolkata\")` → false"],
              ["`equalsIgnoreCase(t)`", "true if same, ignoring case", "`s.equalsIgnoreCase(\"kolkata\")` → true"],
              ["`compareTo(t)`", "0 if equal; else the difference of the first unequal characters' codes", "`s.compareTo(\"Kochi\")` → 9"],
              ["`compareToIgnoreCase(t)`", "same as compareTo, ignoring case", "`\"apple\".compareToIgnoreCase(\"APPLE\")` → 0"],
            ],
          },
          {
            type: "example",
            title: "Working out compareTo",
            problem: "Find the value of `\"Kolkata\".compareTo(\"Kochi\")`.",
            steps: [
              "Compare letter by letter: K = K, o = o.",
              "Third letters differ: 'l' and 'c'.",
              "Character codes: 'l' = 108, 'c' = 99. Result = 108 − 99 = **9**.",
              "Positive means \"Kolkata\" comes after \"Kochi\" in dictionary order. Negative would mean before; 0 means equal.",
            ],
            answer: "9",
          },
          {
            type: "code",
            lang: "java",
            caption: "StringDemo.java: each line of output is shown in the table below.",
            code: `public class StringDemo
{
    public static void main(String[] args)
    {
        String s = "Kolkata";
        System.out.println(s.length());
        System.out.println(s.charAt(3));
        System.out.println(s.indexOf('a'));
        System.out.println(s.lastIndexOf('a'));
        System.out.println(s.substring(2, 5));
        System.out.println(s.toUpperCase());
        System.out.println(s.replace('a', 'o'));
        System.out.println(s.equals("kolkata"));
        System.out.println(s.equalsIgnoreCase("kolkata"));
        System.out.println(s.compareTo("Kochi"));
        System.out.println(s);
    }
}`,
          },
          {
            type: "table",
            headers: ["Line", "Output", "Reason"],
            rows: [
              ["1", "7", "K o l k a t a"],
              ["2", "k", "index 3 is the small k"],
              ["3", "4", "first 'a' is at index 4"],
              ["4", "6", "last 'a' is at index 6"],
              ["5", "lka", "indexes 2, 3, 4"],
              ["6", "KOLKATA", "new uppercase String"],
              ["7", "Kolkoto", "both a's replaced"],
              ["8", "false", "K and k differ"],
              ["9", "true", "case ignored"],
              ["10", "9", "'l' − 'c' = 108 − 99"],
              ["11", "Kolkata", "s itself never changed"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "What does \"Kolkata\".substring(2, 5) return?",
              emoji: "✂️",
              options: ["\"lka\"", "\"lkat\"", "\"olk\"", "\"olka\""],
              answer: 0,
              trap: 1,
              explain: "substring(b, e) starts **at** index b and stops **before** index e. Indexes 2, 3, 4 are l, k, a, so the answer is \"lka\" with 5 − 2 = 3 characters.",
            },
          },
          {
            type: "mistake",
            wrong: "Compare two Strings with `==`, like `if (city == \"Pune\")`.",
            right: "Use `city.equals(\"Pune\")` (or `equalsIgnoreCase`). `==` checks whether both references point to the **same object**, not whether the characters match.",
            why: "`==` works for int and char, so it seems natural. For Strings it compares addresses; a String typed by the user is a different object from the literal \"Pune\", so `==` can give false even though the text is the same.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is `\"MUMBAI\".indexOf('M')`?",
                options: ["0", "2", "1", "−1"],
                answer: 0,
                explain: "indexOf gives the first position. M is at index 0 (and also at 2, which lastIndexOf would give).",
              },
              {
                kind: "truefalse",
                q: "After `s.toUpperCase();` (result not stored), s holds the uppercase text.",
                answer: false,
                explain: "Strings are immutable. Write `s = s.toUpperCase();` to keep the result.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "Section A always has String output questions. Write the **index under each letter** before answering, and remember the return type: `charAt` gives a char, `indexOf` an int, `equals` a boolean, `substring` a String. A frequent error is counting from 1 instead of 0.",
          },
          {
            type: "keypoints",
            items: [
              "Strings are immutable objects; indexes start at 0 and end at length() − 1.",
              "charAt, indexOf, lastIndexOf, substring(b, e) (e is excluded), length().",
              "toUpperCase, toLowerCase, replace, concat, trim return new Strings.",
              "equals / equalsIgnoreCase for equality; compareTo gives 0, a negative or a positive number.",
              "Never compare String contents with ==.",
            ],
          },
        ],
        flashcards: [
          { front: "length() vs length", back: "length() is a String method; length (no brackets) is an array property." },
          { front: "substring(2, 5)", back: "Characters at indexes 2, 3 and 4 (the end index is excluded)." },
          { front: "indexOf when the character is absent", back: "It returns −1." },
          { front: "Immutable String", back: "A String object cannot be changed; methods return new Strings." },
          { front: "equals vs ==", back: "equals compares the characters; == compares the references (addresses)." },
          { front: "\"Apple\".compareTo(\"Apple\")", back: "0, because they are equal." },
          { front: "trim()", back: "Removes spaces at the start and end of a String, not in the middle." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What does `\"COMPUTER\".charAt(4)` return?",
            options: ["'U'", "'P'", "'T'", "'M'"],
            answer: 0,
            explain: "C0 O1 M2 P3 U4: index 4 is 'U'. Answering 'P' comes from counting from 1.",
          },
          {
            kind: "numeric",
            q: "What is `\"Bengaluru\".length()`?",
            answer: 9,
            explain: "B-e-n-g-a-l-u-r-u has 9 characters.",
          },
          {
            kind: "fill",
            q: "`\"Chennai\".substring(3)` returns \"___\".",
            answer: ["nnai"],
            explain: "From index 3 to the end: C0 h1 e2 n3 n4 a5 i6 → \"nnai\".",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What is `\"bat\".compareTo(\"cat\")`?",
            options: ["−1", "1", "0", "−98"],
            answer: 0,
            explain: "'b' (98) − 'c' (99) = −1. Negative means \"bat\" comes first.",
            difficulty: 2,
            hint: "Subtract the codes of the first unequal characters.",
          },
          {
            kind: "truefalse",
            q: "`\"India\".equals(\"india\")` returns true.",
            answer: false,
            explain: "equals is case-sensitive. equalsIgnoreCase would return true.",
          },
          {
            kind: "mcq",
            q: "`String s = \"level\";` What is `s.lastIndexOf('l')`?",
            options: ["4", "0", "3", "5"],
            answer: 0,
            explain: "l0 e1 v2 e3 l4: the last 'l' is at index 4.",
          },
          {
            kind: "multi",
            q: "Which methods return a String? (Choose all that apply)",
            options: ["`substring()`", "`toUpperCase()`", "`indexOf()`", "`trim()`"],
            answers: [0, 1, 3],
            explain: "indexOf returns an int position.",
          },
          {
            kind: "mcq",
            q: "What is printed by `System.out.println(\"Goa\".replace('o', 'e').toUpperCase());`?",
            options: ["GEA", "Gea", "GOA", "geA"],
            answer: 0,
            explain: "replace gives \"Gea\", then toUpperCase gives \"GEA\". Methods can be chained left to right.",
            difficulty: 3,
            hint: "Work left to right, one method at a time.",
          },
        ],
      },
      {
        slug: "string-programs",
        title: "String Programs: Characters and Words",
        summary: "Traverse a String with charAt, reverse it, check a palindrome, count vowels, and split a sentence into words.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Most String programs follow one pattern: **traverse** the String with a loop from index 0 to `length() − 1`, take each character with `charAt(i)`, and do something with it: count it, test it, or add it to a new String.",
          },
          {
            type: "code",
            lang: "java",
            caption: "The traversal pattern",
            code: `for (int i = 0; i < s.length(); i++)
{
    char ch = s.charAt(i);
    // test or use ch here
}`,
          },
          {
            type: "text",
            md: "To **reverse** a String, run the loop backwards from `length() − 1` down to 0 and join each character to a new String. A word that reads the same both ways, like RADAR or MALAYALAM, is a **palindrome**.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Palindrome.java",
            code: `import java.util.Scanner;

public class Palindrome
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String w = sc.next();
        String rev = "";
        for (int i = w.length() - 1; i >= 0; i--)
            rev = rev + w.charAt(i);
        System.out.println("Reverse: " + rev);
        if (rev.equalsIgnoreCase(w))
            System.out.println("Palindrome");
        else
            System.out.println("Not a palindrome");
    }
}`,
          },
          {
            type: "example",
            title: "Dry run: is Radar a palindrome?",
            problem: "The user enters Radar. Trace the program and give the exact output.",
            steps: [
              "w = \"Radar\", length 5, so i runs 4, 3, 2, 1, 0.",
              "Characters added: r (i = 4), a, d, a, R (i = 0). rev = \"radaR\".",
              "`equals` would say false, because R and r differ. `equalsIgnoreCase` ignores case, so the test is true.",
            ],
            answer: "Enter a word: Radar\nReverse: radaR\nPalindrome",
          },
          {
            type: "table",
            headers: ["i", "w.charAt(i)", "rev after the step"],
            rows: [
              ["4", "r", "r"],
              ["3", "a", "ra"],
              ["2", "d", "rad"],
              ["1", "a", "rada"],
              ["0", "R", "radaR"],
            ],
          },
          {
            type: "mistake",
            wrong: "Loop with `for (int i = 0; i <= s.length(); i++)` to reach every character.",
            right: "Use `i < s.length()`. The last index is `length() − 1`.",
            why: "\"Up to the length\" sounds like it covers everything. But with 5 characters the indexes are 0 to 4; `charAt(5)` does not exist and the program stops with StringIndexOutOfBoundsException.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the lines that reverse String w.",
              items: [
                "String rev = \"\";",
                "for (int i = w.length() - 1; i >= 0; i--)",
                "rev = rev + w.charAt(i);",
                "System.out.println(rev);",
              ],
              explain: "Start with an empty String, loop from the last index down to 0 adding each character, and print only after the loop ends.",
            },
          },
          {
            type: "heading",
            text: "Working with words",
          },
          {
            type: "text",
            md: "To split a sentence into **words**, build each word character by character and finish it when you meet a space. Adding one space at the end of the sentence (`s = s.trim() + \" \";`) makes sure the last word is also finished. This simple version assumes there is a single space between words.",
          },
          {
            type: "code",
            lang: "java",
            caption: "VowelWords.java: sample input \"Java is fun\". Output: Java -> 4, is -> 2, fun -> 3 (one per line), then Words = 3 and Vowels = 4.",
            code: `import java.util.Scanner;

public class VowelWords
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String s = sc.nextLine().trim() + " ";
        int vowels = 0, words = 0;
        String word = "";
        for (int i = 0; i < s.length(); i++)
        {
            char ch = s.charAt(i);
            if ("AEIOUaeiou".indexOf(ch) != -1)
                vowels++;
            if (ch == ' ')
            {
                words++;
                System.out.println(word + " -> " + word.length());
                word = "";
            }
            else
                word = word + ch;
        }
        System.out.println("Words = " + words);
        System.out.println("Vowels = " + vowels);
    }
}`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In VowelWords, how many vowels are counted for the input \"Taj Mahal\"?",
                answer: 3,
                explain: "a in Taj, a and a in Mahal: 3 vowels.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "In String programs, use `nextLine()` for a sentence and `next()` for a single word. The trick `\"AEIOUaeiou\".indexOf(ch) != -1` is a short and accepted way to test for a vowel. Remember to handle both cases (capital and small letters) unless the question says otherwise.",
          },
          {
            type: "keypoints",
            items: [
              "Traverse with `for (i = 0; i < s.length(); i++)` and `charAt(i)`.",
              "Reverse by looping from length() − 1 down to 0 and joining characters.",
              "A palindrome equals its reverse; use equals or equalsIgnoreCase, never ==.",
              "Split words by finishing a word at each space; add a space at the end for the last word.",
            ],
          },
        ],
        flashcards: [
          { front: "Palindrome", back: "A word that reads the same forwards and backwards, e.g. MADAM, MALAYALAM." },
          { front: "Loop to reverse a String s", back: "for (int i = s.length() - 1; i >= 0; i--) rev = rev + s.charAt(i);" },
          { front: "StringIndexOutOfBoundsException", back: "Run-time error when charAt or substring uses an index outside 0 to length() − 1." },
          { front: "Quick vowel test", back: "\"AEIOUaeiou\".indexOf(ch) != -1" },
          { front: "Why add a space at the end of the sentence?", back: "So the last word is also ended and processed by the same space test." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which loop visits every character of s exactly once?",
            options: ["`for (int i = 0; i < s.length(); i++)`", "`for (int i = 1; i <= s.length(); i++)`", "`for (int i = 0; i <= s.length(); i++)`", "`for (int i = 1; i < s.length(); i++)`"],
            answer: 0,
            explain: "Indexes run from 0 to length() − 1. The others skip index 0 or go past the end.",
          },
          {
            kind: "truefalse",
            q: "\"MALAYALAM\" is a palindrome.",
            answer: true,
            explain: "Reversed, it is still MALAYALAM.",
          },
          {
            kind: "fill",
            q: "Using the Palindrome program, the input \"Java\" prints Reverse: ___",
            answer: ["avaJ"],
            explain: "Characters are added from the last index: a, v, a, J.",
          },
          {
            kind: "numeric",
            q: "How many times does the reverse loop run for the word \"KERALA\"?",
            answer: 6,
            explain: "It runs once per character: i = 5 down to 0.",
          },
          {
            kind: "mcq",
            q: "In VowelWords, for the input \"Go to Ooty\", what is printed for Vowels?",
            options: ["4", "3", "5", "2"],
            answer: 0,
            explain: "o in Go, o in to, O and o in Ooty: 4. The capital O is counted because \"AEIOUaeiou\" has both cases.",
            difficulty: 2,
            hint: "Do not forget the capital O.",
          },
          {
            kind: "order",
            q: "Order the steps of a palindrome program.",
            items: ["Read the word with next()", "Build the reverse with a backward loop", "Compare the reverse with the word using equals", "Print Palindrome or Not a palindrome"],
            explain: "Input, process (reverse), compare, output.",
          },
          {
            kind: "mcq",
            q: "For the input \"Noon\", what does the Palindrome program print on its last line?",
            options: ["Palindrome", "Not a palindrome", "Error", "nooN"],
            answer: 0,
            explain: "The reverse is \"nooN\". equalsIgnoreCase(\"Noon\") ignores case, so it prints Palindrome. With equals it would print Not a palindrome.",
            difficulty: 3,
            hint: "Which comparison method does the program use?",
          },
        ],
      },
    ],
  },
];

export const topics: Topic[] = [...cbse, ...icse];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  "Networking and the Internet": "networking-and-the-internet",
  "HTML: Lists, Images and Links": "html-lists-images-links",
  "HTML: Tables and Forms": "html-tables-and-forms",
  "Styling with CSS": "styling-with-css",
  "Cyber Ethics and Safety": "cyber-ethics-and-safety",
  "Revision: Java Basics": "java-basics-revision",
  "Class as the Basis of all Computation": "class-as-basis-of-computation",
  "User-defined Methods": "user-defined-methods",
  "Constructors": "constructors",
  "Library Classes": "library-classes",
  "Encapsulation": "encapsulation",
  "Arrays": "arrays",
  "String Handling": "string-handling",
};
