/* ============================================
   CODIXIFY - Futuristic Coding Learning Platform
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ===== NAVBAR BEHAVIOR ===== */
  var navbar = document.querySelector('.navbar');
  var toggle = document.querySelector('.navbar-toggle');
  var navLinks = document.querySelector('.navbar-links');

  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.navbar-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ===== META DATA FOR LEVEL PREVIEW MODAL ===== */
  var levelMeta = {
    1: {
      title: 'Understanding HTML From Scratch',
      badge: 'Level 1',
      description: 'Learn HTML from absolute zero. Understand document structure, headings, paragraphs, line breaks, buttons, images, and div containers. Build your first complete webpage step by step.',
      difficulty: 'Beginner',
      time: '~30 minutes',
      lessons: 15,
      levelUrl: 'level-1.html',
    },
    2: {
      title: 'Building a Complete Website',
      badge: 'Level 2',
      description: 'Build a complete personal website from scratch with 24 hands-on lessons. Learn HTML structure, text formatting, lists, images, links, forms, and project sections — all while building one cohesive "My Website" page.',
      difficulty: 'Beginner',
      time: '~60 minutes',
      lessons: 24,
      levelUrl: 'level-2.html',
    },
    3: {
      title: 'Building Real Modern Websites',
      badge: 'Level 3',
      description: 'Build real modern websites with advanced semantic structure, nested layouts, reusable sections, profile cards, testimonials, pricing cards, FAQs, galleries, and complete landing pages.',
      difficulty: 'Intermediate',
      time: '~45 minutes',
      lessons: 28,
      levelUrl: 'level-3.html',
    },
    4: {
      title: 'Mini Projects',
      badge: 'Level 4',
      description: 'Apply everything you\'ve learned by building real mini projects! Create a Personal Profile Card, a Blog Layout, a Portfolio Website, and a Product Landing Page step by step.',
      difficulty: 'Intermediate',
      time: '~90 minutes',
      lessons: 50,
      levelUrl: 'level-4.html',
    },
  };

  /* ===== CSS LEVEL META ===== */
  var cssLevelMeta = {
    'css-1': { title: 'Introduction to CSS', badge: 'Level 1', description: 'Learn what CSS is and how it works. Understand inline, internal, and external stylesheets. Write your first CSS rules and selectors.', difficulty: 'Beginner', time: '~45 minutes', lessons: 40, levelUrl: 'level-1-css.html' },
    'css-2': { title: 'External CSS & Website Styling', badge: 'Level 2', description: 'Learn how professional developers use external CSS files. Build a Coffee Shop Landing Page using separate index.html and style.css files with real-world project structure.', difficulty: 'Beginner', time: '~30 minutes', lessons: 20, levelUrl: 'level-2-css.html' },
    'css-3': { title: 'Typography & Fonts', badge: 'Level 3', description: 'Style text like a pro. Learn font families, sizes, weights, line heights, letter spacing, and text alignment. Import Google Fonts and create beautiful typography.', difficulty: 'Beginner', time: '~30 minutes', lessons: 10, levelUrl: '#' },
    'css-4': { title: 'Margins & Padding', badge: 'Level 4', description: 'Understand the CSS box model. Control spacing around and inside elements with margins and padding. Master shorthand properties for clean layouts.', difficulty: 'Beginner', time: '~30 minutes', lessons: 10, levelUrl: '#' },
    'css-5': { title: 'Borders & Shadows', badge: 'Level 5', description: 'Add depth and definition to your elements. Create custom borders, rounded corners, and box shadows. Layer multiple shadows for realistic 3D effects.', difficulty: 'Beginner', time: '~30 minutes', lessons: 10, levelUrl: '#' },
    'css-6': { title: 'Buttons & Hover Effects', badge: 'Level 6', description: 'Design interactive buttons with hover, focus, and active states. Create smooth transitions, glowing effects, and custom button styles.', difficulty: 'Intermediate', time: '~45 minutes', lessons: 12, levelUrl: '#' },
    'css-7': { title: 'CSS Display & Position', badge: 'Level 7', description: 'Control element display and positioning. Master display properties and positioning modes including static, relative, absolute, fixed, and sticky.', difficulty: 'Intermediate', time: '~45 minutes', lessons: 12, levelUrl: '#' },
    'css-8': { title: 'Flexbox Basics', badge: 'Level 8', description: 'Discover the power of Flexbox. Learn axis alignment, justify-content, align-items, flex-direction, and wrap for flexible responsive layouts.', difficulty: 'Intermediate', time: '~45 minutes', lessons: 12, levelUrl: '#' },
    'css-9': { title: 'Advanced Flexbox Layouts', badge: 'Level 9', description: 'Take Flexbox further with flex-grow, flex-shrink, flex-basis, and order. Build complex navigation and card layouts.', difficulty: 'Intermediate', time: '~45 minutes', lessons: 14, levelUrl: '#' },
    'css-10': { title: 'CSS Grid Basics', badge: 'Level 10', description: 'Learn CSS Grid, the most powerful layout system. Define rows, columns, grid-template, gap, and create two-dimensional layouts.', difficulty: 'Intermediate', time: '~45 minutes', lessons: 14, levelUrl: '#' },
    'css-11': { title: 'Responsive Design', badge: 'Level 11', description: 'Make websites look great on any device. Learn responsive units, fluid layouts, max-width techniques, and mobile-first design.', difficulty: 'Intermediate', time: '~45 minutes', lessons: 12, levelUrl: '#' },
    'css-12': { title: 'Media Queries', badge: 'Level 12', description: 'Master breakpoints and responsive breakpoints. Write media queries for mobile, tablet, and desktop with adaptive layouts.', difficulty: 'Intermediate', time: '~45 minutes', lessons: 12, levelUrl: '#' },
    'css-13': { title: 'Modern Navigation Bars', badge: 'Level 13', description: 'Build professional navigation systems with horizontal navbars, sticky headers, mobile hamburger menus, dropdowns, and mega menus.', difficulty: 'Advanced', time: '~60 minutes', lessons: 14, levelUrl: '#' },
    'css-14': { title: 'Hero Sections', badge: 'Level 14', description: 'Design stunning hero sections with full-screen backgrounds, typography overlays, gradient masks, CTA buttons, and scroll indicators.', difficulty: 'Advanced', time: '~60 minutes', lessons: 14, levelUrl: '#' },
    'css-15': { title: 'Cards & Components', badge: 'Level 15', description: 'Build reusable UI components including profile cards, pricing cards, feature grids, testimonials, stat counters, and alert banners.', difficulty: 'Advanced', time: '~60 minutes', lessons: 16, levelUrl: '#' },
    'css-16': { title: 'Animations & Transitions', badge: 'Level 16', description: 'Bring designs to life with CSS transitions, keyframe animations, transforms, hover effects, spinners, fade-ins, and parallax.', difficulty: 'Advanced', time: '~60 minutes', lessons: 16, levelUrl: '#' },
    'css-17': { title: 'Glassmorphism UI', badge: 'Level 17', description: 'Master modern glassmorphism with backdrop-filter effects, transparency, blur, and neon border accents for premium UI.', difficulty: 'Advanced', time: '~60 minutes', lessons: 16, levelUrl: '#' },
    'css-18': { title: 'Modern Landing Pages', badge: 'Level 18', description: 'Build complete landing pages combining layout, typography, color, animations, and responsive design into polished, conversion-focused pages.', difficulty: 'Advanced', time: '~60 minutes', lessons: 18, levelUrl: '#' },
    'css-19': { title: 'Portfolio Website Design', badge: 'Level 19', description: 'Design a stunning developer portfolio with hero, project showcase, skills section, timeline, contact form, and responsive layout.', difficulty: 'Advanced', time: '~60 minutes', lessons: 20, levelUrl: '#' },
    'css-20': { title: 'Complete Responsive Website Project', badge: 'Level 20', description: 'Build a production-ready responsive website combining every CSS skill — layout, design, animations, and responsiveness — into a real-world final project.', difficulty: 'Advanced', time: '~90 minutes', lessons: 24, levelUrl: '#' },
  };

  /* ===== LEVEL DATA ===== */
  var lessonData = {

    /* ===== LEVEL 1: UNDERSTANDING HTML FROM SCRATCH (18 steps) ===== */
    1: [
      {
        id: 1,
        title: 'The DOCTYPE Declaration',
        description: 'Every HTML page starts with a special instruction called <code>&lt;!DOCTYPE html&gt;</code>. This tells the browser: "I am an HTML5 document."<br><br>It must be the very first line of your code — before everything else.<br><br>Think of it as a greeting that tells the browser what kind of file it is reading.',
        task: 'Type <code>&lt;!DOCTYPE html&gt;</code> as the very first line. That is all you need for this step.',
        tip: '&lt;!DOCTYPE html&gt; is not an HTML tag — it is a declaration. It has no closing tag.',
        startingCode: '',
        validate: function (code) { return code.indexOf('<!DOCTYPE html>') !== -1; },
        getHint: function (code) { if (code.indexOf('<!DOCTYPE html>') === -1) return 'Type exactly: &lt;!DOCTYPE html&gt;'; return 'Make sure &lt;!DOCTYPE html&gt; is the very first line.'; },
        successMsg: 'Perfect! You just wrote the declaration that starts every HTML document.',
        errorMsg: 'Type exactly: <!DOCTYPE html> on the first line.',
      },
      {
        id: 2,
        title: 'The html Tag — Root Container',
        description: 'The <code>&lt;html&gt;</code> tag is the <strong>root element</strong> of your entire webpage. Everything else goes inside it.<br><br>Think of it like the outer shell of a document — you open it at the top and close it at the bottom.<br><br>For this step, write the DOCTYPE from step 1, then add the opening and closing html tags.',
        task: 'Write <code>&lt;!DOCTYPE html&gt;</code> on line 1, then <code>&lt;html&gt;</code> on line 2, and <code>&lt;/html&gt;</code> on line 3.',
        tip: 'The &lt;html&gt; tag has both an opening &lt;html&gt; and a closing &lt;/html&gt; tag. Never skip the closing tag.',
        startingCode: '',
        validate: function (code) { return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html>') !== -1 && code.indexOf('</html>') !== -1; },
        getHint: function (code) { if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt; on line 1.'; if (code.indexOf('<html>') === -1) return 'Add &lt;html&gt; after DOCTYPE.'; if (code.indexOf('</html>') === -1) return 'Close with &lt;/html&gt; at the end.'; return 'Your structure should be: DOCTYPE, then &lt;html&gt;, then &lt;/html&gt;.'; },
        successMsg: 'Excellent! You have the DOCTYPE and html tags — the foundation of every webpage.',
        errorMsg: 'Write: <!DOCTYPE html> then <html> then </html>.',
      },
      {
        id: 3,
        title: 'The head Tag — Page Information',
        description: 'The <code>&lt;head&gt;</code> tag holds <strong>information about the webpage</strong> that is not directly visible on the screen. Things like the title, character encoding, and links to stylesheets live here.<br><br>The head comes after the opening html tag and before the body.<br><br>Now write the structure with DOCTYPE, html, head, and their closing tags.',
        task: 'Write the full structure: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;/head&gt;</code>, <code>&lt;/html&gt;</code> in that order.',
        tip: 'Everything in the &lt;head&gt; is for the browser and search engines — users do not see it directly.',
        startingCode: '',
        validate: function (code) { return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html>') !== -1 && code.indexOf('<head>') !== -1 && code.indexOf('</head>') !== -1 && code.indexOf('</html>') !== -1; },
        getHint: function (code) { if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt;.'; if (code.indexOf('<html>') === -1) return 'Add &lt;html&gt; after DOCTYPE.'; if (code.indexOf('<head>') === -1) return 'Add &lt;head&gt; inside &lt;html&gt;.'; if (code.indexOf('</head>') === -1) return 'Close the head with &lt;/head&gt;.'; if (code.indexOf('</html>') === -1) return 'Close with &lt;/html&gt; at the end.'; return 'Check your order: DOCTYPE, html, head, /head, /html.'; },
        successMsg: 'Great! Your page structure now includes the head section for page information.',
        errorMsg: 'Write: DOCTYPE, <html>, <head>, </head>, </html> in order.',
      },
      {
        id: 4,
        title: 'The title Tag — Naming Your Page',
        description: 'The <code>&lt;title&gt;</code> tag goes inside the head. It sets the text that appears on the <strong>browser tab</strong> and is used by search engines as the page name.<br><br>If you do not add a title, the browser tab shows the file name instead — which looks unprofessional.<br><br>Write the full structure with the title "My First Page" inside the head.',
        task: 'Write DOCTYPE, html, head, and add <code>&lt;title&gt;My First Page&lt;/title&gt;</code> inside the head. Then close head and html properly.',
        tip: 'The title is what users see in their browser tab. Always give your page a clear, descriptive title.',
        startingCode: '',
        validate: function (code) { return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html>') !== -1 && code.indexOf('<head>') !== -1 && code.indexOf('<title>My First Page</title>') !== -1 && code.indexOf('</head>') !== -1 && code.indexOf('</html>') !== -1; },
        getHint: function (code) { if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt;.'; if (code.indexOf('<html>') === -1) return 'Add &lt;html&gt;.'; if (code.indexOf('<head>') === -1) return 'Add &lt;head&gt;.'; if (code.indexOf('<title>') === -1) return 'Add &lt;title&gt; inside the head.'; if (code.indexOf('My First Page') === -1) return 'The title text should say: My First Page'; if (code.indexOf('</title>') === -1) return 'Close the title with &lt;/title&gt;.'; if (code.indexOf('</head>') === -1) return 'Close the head with &lt;/head&gt;.'; return 'Close with &lt;/html&gt; at the end.'; },
        successMsg: 'Wonderful! Your page now has a title that appears on the browser tab.',
        errorMsg: 'Add <title>My First Page</title> inside the head section.',
      },
      {
        id: 5,
        title: 'The body Tag — Visible Content',
        description: 'The <code>&lt;body&gt;</code> tag holds everything that users <strong>see</strong> on the webpage — headings, paragraphs, images, buttons, and more.<br><br>The body comes after the head and before the closing html tag. Without the body, your page would be blank!<br><br>This is the final step to complete the basic HTML structure.',
        task: 'Write the complete basic HTML structure with DOCTYPE, html, head, title "My First Page", body, and all closing tags in the right order.',
        tip: 'Everything you see on a website — text, images, buttons — lives inside the &lt;body&gt; tag.',
        startingCode: '',
        validate: function (code) { return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html>') !== -1 && code.indexOf('<head>') !== -1 && code.indexOf('<title>My First Page</title>') !== -1 && code.indexOf('</head>') !== -1 && code.indexOf('<body>') !== -1 && code.indexOf('</body>') !== -1 && code.indexOf('</html>') !== -1; },
        getHint: function (code) { if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt;.'; if (code.indexOf('<html>') === -1) return 'Add &lt;html&gt;.'; if (code.indexOf('<head>') === -1) return 'Add &lt;head&gt;.'; if (code.indexOf('<title>My First Page</title>') === -1) return 'Add &lt;title&gt;My First Page&lt;/title&gt; inside head.'; if (code.indexOf('</head>') === -1) return 'Close the head with &lt;/head&gt;.'; if (code.indexOf('<body>') === -1) return 'Add &lt;body&gt; after the head.'; if (code.indexOf('</body>') === -1) return 'Close the body with &lt;/body&gt;.'; if (code.indexOf('</html>') === -1) return 'Close with &lt;/html&gt; at the end.'; return 'Your structure should be: DOCTYPE, html, head (with title), /head, body, /body, /html.'; },
        successMsg: 'Perfect! You now know the basic structure of every HTML document. This is the skeleton of the web!',
        errorMsg: 'Write the complete structure with DOCTYPE, html, head, title, body, and all closing tags.',
      },
      {
        id: 6,
        title: 'Your First Heading — h1',
        description: 'The <code>&lt;h1&gt;</code> tag creates the <strong>main heading</strong> on your page. It is the biggest and most important heading. Every page should have exactly one h1.<br><br>Think of it as the title of a book — it tells visitors and search engines what your page is about.<br><br>Inside the body, add an h1 heading.',
        task: 'Inside the body, add <code>&lt;h1&gt;Welcome to My Page&lt;/h1&gt;</code> as the main heading.',
        tip: 'Use only one &lt;h1&gt; per page. It is the most important heading for search engines.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h1>Welcome to My Page</h1>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h1>') === -1) return 'Add &lt;h1&gt; inside the body.'; if (code.indexOf('Welcome to My Page') === -1) return 'Your heading text should say "Welcome to My Page".'; if (code.indexOf('</h1>') === -1) return 'Close your h1 with &lt;/h1&gt;.'; return 'Write exactly: &lt;h1&gt;Welcome to My Page&lt;/h1&gt; inside the body.'; },
        successMsg: 'Excellent! Your page now has a main heading that welcomes visitors.',
        errorMsg: 'Add <h1>Welcome to My Page</h1> inside the body.',
      },
      {
        id: 7,
        title: 'More Headings — h2 and h3',
        description: 'HTML has six heading levels: <code>&lt;h1&gt;</code> (most important) through <code>&lt;h6&gt;</code> (least important). They create a <strong>hierarchy</strong> that helps organize your content.<br><br>&lt;h2&gt; is for major sections. &lt;h3&gt; is for subsections inside an h2 section. Each level gets smaller.<br><br>Add an h2 and an h3 after your main heading.',
        task: 'After the h1, add <code>&lt;h2&gt;About This Page&lt;/h2&gt;</code> and <code>&lt;h3&gt;Why I\'m Learning HTML&lt;/h3&gt;</code>.',
        tip: 'Headings should follow a logical order: h1, then h2, then h3. Do not skip levels.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>About This Page</h2>') !== -1 && code.indexOf('<h3>Why I\'m Learning HTML</h3>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>About This Page</h2>') === -1) return 'Add &lt;h2&gt;About This Page&lt;/h2&gt; after the h1.'; if (code.indexOf('<h3>Why I\'m Learning HTML</h3>') === -1) return 'Add &lt;h3&gt;Why I\'m Learning HTML&lt;/h3&gt; after the h2.'; return 'Your headings should be: h1, then h2, then h3 in that order.'; },
        successMsg: 'Great! Your page now has a clear heading hierarchy with h1, h2, and h3.',
        errorMsg: 'Add <h2>About This Page</h2> and <h3>Why I\'m Learning HTML</h3> after the h1.',
      },
      {
        id: 8,
        title: 'Writing a Paragraph',
        description: 'The <code>&lt;p&gt;</code> tag creates a <strong>paragraph</strong> — a block of text. Paragraphs are the most common way to display written content on the web.<br><br>Browsers automatically add space before and after each paragraph, making your text easier to read.<br><br>Add a paragraph after your h3 heading.',
        task: 'After the h3, add: <code>&lt;p&gt;This is my first webpage. I am learning how to build websites with HTML.&lt;/p&gt;</code>',
        tip: 'Always close your &lt;p&gt; tags. Forgetting &lt;/p&gt; is one of the most common beginner mistakes.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <h2>About This Page</h2>\n  <h3>Why I\'m Learning HTML</h3>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('This is my first webpage. I am learning how to build websites with HTML.') !== -1 && code.indexOf('<p>') !== -1 && code.indexOf('</p>') !== -1; },
        getHint: function (code) { if (code.indexOf('<p>') === -1) return 'Add a &lt;p&gt; tag after the h3 heading.'; if (code.indexOf('This is my first webpage. I am learning how to build websites with HTML.') === -1) return 'Your paragraph should say: "This is my first webpage. I am learning how to build websites with HTML."'; if (code.indexOf('</p>') === -1) return 'Close your paragraph with &lt;/p&gt;.'; return 'Write exactly: &lt;p&gt;This is my first webpage. I am learning how to build websites with HTML.&lt;/p&gt;'; },
        successMsg: 'Wonderful! Your page now has a paragraph with real content about your learning journey.',
        errorMsg: 'Add a paragraph with "This is my first webpage. I am learning how to build websites with HTML."',
      },
      {
        id: 9,
        title: 'Line Breaks and Horizontal Rules',
        description: 'The <code>&lt;br&gt;</code> tag creates a <strong>line break</strong> inside a paragraph. The <code>&lt;hr&gt;</code> tag draws a <strong>horizontal line</strong> across the page. Both are self-closing — no closing tag needed.<br><br>Use &lt;br&gt; to split text across lines inside the same paragraph. Use &lt;hr&gt; to visually separate sections.<br><br>Add a second paragraph with a line break, then add a horizontal rule.',
        task: 'Add a second paragraph: <code>&lt;p&gt;I am learning HTML&lt;br&gt;one step at a time!&lt;/p&gt;</code> then add <code>&lt;hr&gt;</code> on its own line after it.',
        tip: 'Never write &lt;br&gt;&lt;/br&gt; or &lt;hr&gt;&lt;/hr&gt;. These tags are self-closing — just &lt;br&gt; and &lt;hr&gt;.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <h2>About This Page</h2>\n  <h3>Why I\'m Learning HTML</h3>\n  <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<br>') !== -1 && code.indexOf('I am learning HTML') !== -1 && code.indexOf('one step at a time!') !== -1 && code.indexOf('<hr>') !== -1; },
        getHint: function (code) { if (code.indexOf('<p>I am learning HTML') === -1 && code.indexOf('<br>') === -1) return 'Add: &lt;p&gt;I am learning HTML&lt;br&gt;one step at a time!&lt;/p&gt;'; if (code.indexOf('<br>') === -1) return 'Add &lt;br&gt; between "I am learning HTML" and "one step at a time!".'; if (code.indexOf('one step at a time!') === -1) return 'After the &lt;br&gt;, write "one step at a time!"'; if (code.indexOf('<hr>') === -1) return 'Add &lt;hr&gt; on its own line after the second paragraph.'; return 'Add &lt;br&gt; inside the paragraph and &lt;hr&gt; after it.'; },
        successMsg: 'Great! You used br for a line break inside a paragraph and hr to draw a horizontal divider.',
        errorMsg: 'Add <p>I am learning HTML<br>one step at a time!</p> then add <hr>.',
      },
      {
        id: 10,
        title: 'Bold and Italic Text',
        description: 'The <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> tags add <strong>meaning</strong> to your text. &lt;strong&gt; makes text <strong>bold</strong> and shows importance. &lt;em&gt; makes text <em>italic</em> and adds emphasis.<br><br>Unlike &lt;b&gt; and &lt;i&gt; which only change appearance, &lt;strong&gt; and &lt;em&gt; tell screen readers and search engines that the text is important or emphasized.<br><br>Add a paragraph with bold and italic text.',
        task: 'Add: <code>&lt;p&gt;&lt;strong&gt;HTML&lt;/strong&gt; is &lt;em&gt;fun&lt;/em&gt; to learn!&lt;/p&gt;</code> after the horizontal rule.',
        tip: 'Use &lt;strong&gt; instead of &lt;b&gt; and &lt;em&gt; instead of &lt;i&gt; for better accessibility.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <h2>About This Page</h2>\n  <h3>Why I\'m Learning HTML</h3>\n  <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<strong>HTML</strong>') !== -1 && code.indexOf('<em>fun</em>') !== -1; },
        getHint: function (code) { if (code.indexOf('<strong>') === -1) return 'Add &lt;strong&gt; around the word "HTML".'; if (code.indexOf('<strong>HTML</strong>') === -1) return 'Wrap "HTML" in &lt;strong&gt; tags: &lt;strong&gt;HTML&lt;/strong&gt;'; if (code.indexOf('<em>fun</em>') === -1) return 'Wrap "fun" in &lt;em&gt; tags: &lt;em&gt;fun&lt;/em&gt;'; return 'Write: &lt;p&gt;&lt;strong&gt;HTML&lt;/strong&gt; is &lt;em&gt;fun&lt;/em&gt; to learn!&lt;/p&gt;'; },
        successMsg: 'Excellent! You used strong for bold and em for italic — adding meaning to your text.',
        errorMsg: 'Add <p><strong>HTML</strong> is <em>fun</em> to learn!</p> after the hr.',
      },
      {
        id: 11,
        title: 'Adding a Button',
        description: 'The <code>&lt;button&gt;</code> tag creates a <strong>clickable button</strong> on your webpage. Buttons are how users take action — like submitting forms, starting games, or triggering events.<br><br>The text between the opening and closing tags becomes the label that users see and click.<br><br>Add a button after the last paragraph.',
        task: 'Add: <code>&lt;button&gt;Click Me&lt;/button&gt;</code> after the paragraph with strong and em.',
        tip: 'A button without JavaScript does nothing yet. In later levels you will learn to make buttons interactive.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <h2>About This Page</h2>\n  <h3>Why I\'m Learning HTML</h3>\n  <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n  <p><strong>HTML</strong> is <em>fun</em> to learn!</p>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<button>Click Me</button>') !== -1; },
        getHint: function (code) { if (code.indexOf('<button>') === -1) return 'Add a &lt;button&gt; tag.'; if (code.indexOf('Click Me') === -1) return 'The button text should say "Click Me".'; if (code.indexOf('</button>') === -1) return 'Close your button with &lt;/button&gt;.'; return 'Write exactly: &lt;button&gt;Click Me&lt;/button&gt;'; },
        successMsg: 'Awesome! Your page now has a clickable button.',
        errorMsg: 'Add <button>Click Me</button> after the last paragraph.',
      },
      {
        id: 12,
        title: 'Adding an Image',
        description: 'The <code>&lt;img&gt;</code> tag <strong>embeds an image</strong> into your webpage. It is self-closing — no closing tag needed.<br><br>The <code>src</code> attribute tells the browser where the image file is located. The <code>alt</code> attribute provides text description for accessibility and SEO.<br><br>Add an image after the button.',
        task: 'Add: <code>&lt;img src="https://picsum.photos/200" alt="Random photo"&gt;</code> after the button.',
        tip: 'Always include the alt attribute. It helps visually impaired users and search engines understand your images.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <h2>About This Page</h2>\n  <h3>Why I\'m Learning HTML</h3>\n  <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n  <p><strong>HTML</strong> is <em>fun</em> to learn!</p>\n  <button>Click Me</button>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<img') !== -1 && code.indexOf('src=') !== -1 && code.indexOf('alt=') !== -1; },
        getHint: function (code) { if (code.indexOf('<img') === -1) return 'Add an &lt;img&gt; tag.'; if (code.indexOf('src=') === -1) return 'Add src="https://picsum.photos/200" to the image.'; if (code.indexOf('alt=') === -1) return 'Add alt="Random photo" for accessibility.'; return 'Write: &lt;img src="https://picsum.photos/200" alt="Random photo"&gt;'; },
        successMsg: 'Great! Your page now has an image with proper src and alt attributes.',
        errorMsg: 'Add <img src="https://picsum.photos/200" alt="Random photo">',
      },
      {
        id: 13,
        title: 'Adding a Link',
        description: 'The <code>&lt;a&gt;</code> tag creates a <strong>hyperlink</strong> — clickable text that takes users to another page. The <code>href</code> attribute specifies the destination URL.<br><br>Links are what make the web interconnected. Without them, every page would be isolated.<br><br>Add a link after the image.',
        task: 'Add: <code>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;</code> after the image.',
        tip: 'The text between &lt;a&gt; and &lt;/a&gt; is what users see and click. The href has the destination URL.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <h2>About This Page</h2>\n  <h3>Why I\'m Learning HTML</h3>\n  <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n  <p><strong>HTML</strong> is <em>fun</em> to learn!</p>\n  <button>Click Me</button>\n  <img src="https://picsum.photos/200" alt="Random photo">\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<a href="https://example.com"') !== -1 && code.indexOf('Visit Example') !== -1 && code.indexOf('</a>') !== -1; },
        getHint: function (code) { if (code.indexOf('<a') === -1) return 'Add an &lt;a&gt; tag.'; if (code.indexOf('href=') === -1) return 'Add href="https://example.com" to the link.'; if (code.indexOf('Visit Example') === -1) return 'The link text should say "Visit Example".'; if (code.indexOf('</a>') === -1) return 'Close the link with &lt;/a&gt;.'; return 'Write: &lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;'; },
        successMsg: 'Perfect! You added a clickable link — the foundation of web navigation.',
        errorMsg: 'Add <a href="https://example.com">Visit Example</a>',
      },
      {
        id: 14,
        title: 'Grouping with a Div',
        description: 'The <code>&lt;div&gt;</code> tag is a <strong>generic container</strong> that groups related elements together. It is the most commonly used HTML tag for structuring layouts.<br><br>Think of a div as a box. You can put headings, paragraphs, images — anything — inside it. Later, with CSS, you can style entire groups at once.<br><br>Wrap the about section (h2, h3, and first paragraph) in a div.',
        task: 'Add <code>&lt;div&gt;</code> before the h2 heading and <code>&lt;/div&gt;</code> after the first paragraph to wrap that content.',
        tip: 'A &lt;div&gt; by itself does not change appearance. It is a container for organizing your code.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <h2>About This Page</h2>\n  <h3>Why I\'m Learning HTML</h3>\n  <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n  <p><strong>HTML</strong> is <em>fun</em> to learn!</p>\n  <button>Click Me</button>\n  <img src="https://picsum.photos/200" alt="Random photo">\n  <a href="https://example.com">Visit Example</a>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<div>') !== -1 && code.indexOf('</div>') !== -1 && code.indexOf('<h1>Welcome to My Page</h1>') !== -1; },
        getHint: function (code) { if (code.indexOf('<div>') === -1) return 'Add &lt;div&gt; before the h2 heading.'; if (code.indexOf('</div>') === -1) return 'Add &lt;/div&gt; after the first paragraph (the one about "This is my first webpage...").'; return 'Wrap the h2, h3, and first paragraph inside &lt;div&gt;...&lt;/div&gt;.'; },
        successMsg: 'Great! You grouped related content inside a div container. Your code is now more organized.',
        errorMsg: 'Add <div> before the h2 and </div> after the first paragraph.',
      },
      {
        id: 15,
        title: 'Unordered Lists',
        description: 'The <code>&lt;ul&gt;</code> tag creates an <strong>unordered list</strong> with bullet points. Each item is wrapped in <code>&lt;li&gt;</code> (list item) tags.<br><br>Use unordered lists when the order of items does not matter — like a list of hobbies, features, or ingredients.<br><br>Add a heading and an unordered list of hobbies after the div.',
        task: 'Add <code>&lt;h2&gt;My Hobbies&lt;/h2&gt;</code> then an unordered list with: Reading, Coding, and Gaming.',
        tip: 'Each list item uses &lt;li&gt;. The browser automatically adds bullet points for unordered lists.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <div>\n    <h2>About This Page</h2>\n    <h3>Why I\'m Learning HTML</h3>\n    <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  </div>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n  <p><strong>HTML</strong> is <em>fun</em> to learn!</p>\n  <button>Click Me</button>\n  <img src="https://picsum.photos/200" alt="Random photo">\n  <a href="https://example.com">Visit Example</a>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>My Hobbies</h2>') !== -1 && code.indexOf('<ul>') !== -1 && code.indexOf('<li>Reading</li>') !== -1 && code.indexOf('<li>Coding</li>') !== -1 && code.indexOf('<li>Gaming</li>') !== -1 && code.indexOf('</ul>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>My Hobbies</h2>') === -1) return 'Add &lt;h2&gt;My Hobbies&lt;/h2&gt; first.'; if (code.indexOf('<ul>') === -1) return 'Start the list with &lt;ul&gt;.'; if (code.indexOf('<li>Reading</li>') === -1) return 'Add &lt;li&gt;Reading&lt;/li&gt;.'; if (code.indexOf('<li>Coding</li>') === -1) return 'Add &lt;li&gt;Coding&lt;/li&gt;.'; if (code.indexOf('<li>Gaming</li>') === -1) return 'Add &lt;li&gt;Gaming&lt;/li&gt;.'; if (code.indexOf('</ul>') === -1) return 'Close the list with &lt;/ul&gt;.'; return 'Write: <ul><li>Reading</li><li>Coding</li><li>Gaming</li></ul>'; },
        successMsg: 'Excellent! You created a bullet list showing your hobbies.',
        errorMsg: 'Add <h2>My Hobbies</h2> and a <ul> with Reading, Coding, and Gaming.',
      },
      {
        id: 16,
        title: 'Ordered Lists',
        description: 'The <code>&lt;ol&gt;</code> tag creates an <strong>ordered list</strong> with numbered items. Each item is still wrapped in <code>&lt;li&gt;</code> tags, but the browser adds numbers (1, 2, 3...) instead of bullets.<br><br>Use ordered lists when the sequence matters — like steps in a recipe, rankings, or instructions.<br><br>Add a heading and an ordered list of goals.',
        task: 'Add <code>&lt;h2&gt;My Goals&lt;/h2&gt;</code> then an ordered list with: Learn HTML, Build a Website, and Get a Job.',
        tip: 'The browser automatically numbers ordered list items. You do not need to type the numbers yourself.',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <div>\n    <h2>About This Page</h2>\n    <h3>Why I\'m Learning HTML</h3>\n    <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  </div>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n  <p><strong>HTML</strong> is <em>fun</em> to learn!</p>\n  <button>Click Me</button>\n  <img src="https://picsum.photos/200" alt="Random photo">\n  <a href="https://example.com">Visit Example</a>\n  <h2>My Hobbies</h2>\n  <ul>\n    <li>Reading</li>\n    <li>Coding</li>\n    <li>Gaming</li>\n  </ul>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>My Goals</h2>') !== -1 && code.indexOf('<ol>') !== -1 && code.indexOf('<li>Learn HTML</li>') !== -1 && code.indexOf('<li>Build a Website</li>') !== -1 && code.indexOf('<li>Get a Job</li>') !== -1 && code.indexOf('</ol>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>My Goals</h2>') === -1) return 'Add &lt;h2&gt;My Goals&lt;/h2&gt; first.'; if (code.indexOf('<ol>') === -1) return 'Start the list with &lt;ol&gt;.'; if (code.indexOf('<li>Learn HTML</li>') === -1) return 'Add &lt;li&gt;Learn HTML&lt;/li&gt;.'; if (code.indexOf('<li>Build a Website</li>') === -1) return 'Add &lt;li&gt;Build a Website&lt;/li&gt;.'; if (code.indexOf('<li>Get a Job</li>') === -1) return 'Add &lt;li&gt;Get a Job&lt;/li&gt;.'; if (code.indexOf('</ol>') === -1) return 'Close the list with &lt;/ol&gt;.'; return 'Write an ordered list with: Learn HTML, Build a Website, Get a Job.'; },
        successMsg: 'Great! You created a numbered list of goals. Notice how the browser adds 1, 2, 3 automatically.',
        errorMsg: 'Add <h2>My Goals</h2> and an <ol> with Learn HTML, Build a Website, and Get a Job.',
      },
      {
        id: 17,
        title: 'Adding Comments',
        description: 'HTML comments are <strong>notes in your code</strong> that are not displayed in the browser. They help developers document their work and organize their code.<br><br>Comments start with <code>&lt;!--</code> and end with <code>--&gt;</code>. Anything between them is invisible to users but visible in the source code.<br><br>Add a comment right after the opening body tag.',
        task: 'Add <code>&lt;!-- This is my first webpage --&gt;</code> right after the &lt;body&gt; tag.',
        tip: 'Comments are great for explaining what your code does. Other developers (and future you) will thank you!',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page</h1>\n  <div>\n    <h2>About This Page</h2>\n    <h3>Why I\'m Learning HTML</h3>\n    <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  </div>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n  <p><strong>HTML</strong> is <em>fun</em> to learn!</p>\n  <button>Click Me</button>\n  <img src="https://picsum.photos/200" alt="Random photo">\n  <a href="https://example.com">Visit Example</a>\n  <h2>My Hobbies</h2>\n  <ul>\n    <li>Reading</li>\n    <li>Coding</li>\n    <li>Gaming</li>\n  </ul>\n  <h2>My Goals</h2>\n  <ol>\n    <li>Learn HTML</li>\n    <li>Build a Website</li>\n    <li>Get a Job</li>\n  </ol>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<!-- This is my first webpage -->') !== -1; },
        getHint: function (code) { if (code.indexOf('<!--') === -1) return 'Start the comment with &lt;!--'; if (code.indexOf('This is my first webpage') === -1) return 'Inside the comment, write "This is my first webpage".'; if (code.indexOf('-->') === -1) return 'Close the comment with --&gt;.'; return 'Write: &lt;!-- This is my first webpage --&gt; right after &lt;body&gt;.'; },
        successMsg: 'Perfect! Your code now has a comment. It is invisible in the browser but helpful in your code.',
        errorMsg: 'Add <!-- This is my first webpage --> after the <body> tag.',
      },
      {
        id: 18,
        title: 'Add a Footer — Complete Your Page',
        description: 'The <code>&lt;footer&gt;</code> tag defines the <strong>footer section</strong> of a webpage. It typically appears at the bottom and contains copyright information, contact details, or links.<br><br>Adding a footer gives your page a professional, finished look. Most websites have one.<br><br>Add a footer at the bottom of your body with a copyright message. This is the final touch!',
        task: 'Add <code>&lt;footer&gt;</code> at the bottom of the body (before <code>&lt;/body&gt;</code>) with: <code>&lt;p&gt;&amp;copy; 2024 My First Page. Built with HTML.&lt;/p&gt;</code>',
        tip: 'The &lt;footer&gt; tag is a semantic HTML5 element that tells search engines "this is the footer of the page."',
        startingCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <!-- This is my first webpage -->\n  <h1>Welcome to My Page</h1>\n  <div>\n    <h2>About This Page</h2>\n    <h3>Why I\'m Learning HTML</h3>\n    <p>This is my first webpage. I am learning how to build websites with HTML.</p>\n  </div>\n  <p>I am learning HTML<br>one step at a time!</p>\n  <hr>\n  <p><strong>HTML</strong> is <em>fun</em> to learn!</p>\n  <button>Click Me</button>\n  <img src="https://picsum.photos/200" alt="Random photo">\n  <a href="https://example.com">Visit Example</a>\n  <h2>My Hobbies</h2>\n  <ul>\n    <li>Reading</li>\n    <li>Coding</li>\n    <li>Gaming</li>\n  </ul>\n  <h2>My Goals</h2>\n  <ol>\n    <li>Learn HTML</li>\n    <li>Build a Website</li>\n    <li>Get a Job</li>\n  </ol>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<footer>') !== -1 && code.indexOf('</footer>') !== -1 && code.indexOf('©') !== -1 && code.indexOf('My First Page') !== -1; },
        getHint: function (code) { if (code.indexOf('<footer>') === -1) return 'Add &lt;footer&gt; before the closing &lt;/body&gt; tag.'; if (code.indexOf('©') === -1) return 'Inside the footer, add a paragraph with &amp;copy; 2024.'; if (code.indexOf('My First Page') === -1) return 'The copyright text should say "My First Page. Built with HTML."'; if (code.indexOf('</footer>') === -1) return 'Close the footer with &lt;/footer&gt;.'; return 'Add: &lt;footer&gt;&lt;p&gt;&amp;copy; 2024 My First Page. Built with HTML.&lt;/p&gt;&lt;/footer&gt;'; },
        successMsg: 'Congratulations! You built your first complete webpage from scratch. Every section is in place — you are ready for Level 2!',
        errorMsg: 'Add a <footer> at the bottom with a copyright paragraph.',
      },
    ],

    /* ===== LEVEL 2: BUILDING A COMPLETE WEBSITE (24 steps) ===== */
    2: [
      {
        id: 1,
        title: 'Basic HTML Document Structure',
        description: 'Every HTML document follows a standard structure. The <code>&lt;!DOCTYPE html&gt;</code> declaration must be the very first line — it tells the browser this is an HTML5 document.<br><br>📄 <strong>What is DOCTYPE?</strong> A special instruction that tells the browser which version of HTML to use. It must always be at the top.<br><br>📄 <strong>What is &lt;html&gt;?</strong> The root element that wraps all page content. The <code>lang</code> attribute tells search engines which language your page uses.<br><br>📄 <strong>What is &lt;title&gt;?</strong> It defines the page name shown in the browser tab and used by search engines. It goes inside &lt;head&gt;.',
        task: 'Write the basic HTML document structure with <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags. The title should say "My Website".',
        tip: 'Always use &lt;!DOCTYPE html&gt; at the very top — it is not an HTML tag, it is a declaration.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Title</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) { return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html lang="en">') !== -1 && code.indexOf('<head>') !== -1 && code.indexOf('<body>') !== -1 && code.indexOf('<title>My Website</title>') !== -1; },
        getHint: function (code) { if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt; at the very first line.'; if (code.indexOf('<html lang="en">') === -1) return 'Add &lt;html lang="en"&gt; after DOCTYPE.'; if (code.indexOf('<head>') === -1) return 'Add &lt;head&gt; inside &lt;html&gt;.'; if (code.indexOf('<body>') === -1) return 'Add &lt;body&gt; after &lt;/head&gt;.'; if (code.indexOf('<title>My Website</title>') === -1) return 'Change the title to: &lt;title&gt;My Website&lt;/title&gt;'; return 'Check DOCTYPE, html, head, body in the right order.'; },
        successMsg: 'Perfect! You created the foundation of every HTML document. Now let\'s build a real website!',
        errorMsg: 'Your page must have DOCTYPE, html, head, body, and the title "My Website".',
      },
      {
        id: 2,
        title: 'Add a Brand Name',
        description: 'The <code>&lt;span&gt;</code> tag is an inline container — it wraps text without breaking the line. It is perfect for highlighting a brand name or small pieces of text.<br><br>► <strong>What is &lt;span&gt;?</strong> An inline element that stays on the same line and only takes up as much space as its content.<br><br>► <strong>Why use a span for branding?</strong> It lets you style the brand name differently without affecting the layout of surrounding elements.<br><br>► <strong>Where is it used?</strong> Brand names in navbars, highlighted words, inline text styling.',
        task: 'Inside the <code>&lt;body&gt;</code>, add <code>&lt;span&gt;MySite&lt;/span&gt;</code> as the brand name of your website.',
        tip: 'The &lt;span&gt; tag is inline — it does NOT create a new line. Unlike &lt;div&gt; which is block-level.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) { return code.indexOf('<span>MySite</span>') !== -1; },
        getHint: function (code) { if (code.indexOf('<span>') === -1) return 'Add &lt;span&gt;MySite&lt;/span&gt; inside the body.'; if (code.indexOf('MySite') === -1) return 'The span should contain the text "MySite".'; if (code.indexOf('</span>') === -1) return 'Close your span with &lt;/span&gt;.'; return 'Write exactly: &lt;span&gt;MySite&lt;/span&gt;'; },
        successMsg: 'Great! Your brand name "MySite" is on the page. Every website needs a name!',
        errorMsg: 'Add <span>MySite</span> inside the body.',
      },
      {
        id: 3,
        title: 'Add Navigation Links',
        description: 'The <code>&lt;a&gt;</code> tag creates hyperlinks — clickable text that navigates to other pages or sections. The <code>href</code> attribute specifies the destination.<br><br>🔗 <strong>What is &lt;a&gt;?</strong> The anchor tag creates a link. The href attribute tells the browser where the link goes.<br><br>🔗 <strong>Why use navigation links?</strong> They let users explore different parts of your website. Every site needs navigation.<br><br>🔗 <strong>Where are they used?</strong> Navigation menus, text links, buttons — anywhere users need to navigate.',
        task: 'After the span, add three links on the same line: <code>&lt;a href="#"&gt;Home&lt;/a&gt;</code>, <code>&lt;a href="#"&gt;About&lt;/a&gt;</code>, <code>&lt;a href="#"&gt;Contact&lt;/a&gt;</code>.',
        tip: 'Use href="#" as a placeholder when you do not have a real URL yet. Replace it later when you publish your site.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n</body>\n</html>',
        validate: function (code) { return (code.match(/<a /g) || []).length >= 3 && code.indexOf('Home') !== -1 && code.indexOf('About') !== -1 && code.indexOf('Contact') !== -1; },
        getHint: function (code) { if ((code.match(/<a /g) || []).length < 3) return 'You need 3 &lt;a&gt; tags: Home, About, Contact.'; if (code.indexOf('Home') === -1) return 'Add &lt;a href="#"&gt;Home&lt;/a&gt; as the first link.'; if (code.indexOf('About') === -1) return 'Add &lt;a href="#"&gt;About&lt;/a&gt; as the second link.'; if (code.indexOf('Contact') === -1) return 'Add &lt;a href="#"&gt;Contact&lt;/a&gt; as the third link.'; return 'Each link needs href="#" and the correct text.'; },
        successMsg: 'Excellent! Your navigation has three links: Home, About, and Contact.',
        errorMsg: 'Add three <a href="#"> links: Home, About, and Contact after the span.',
      },
      {
        id: 4,
        title: 'Add a Visual Divider',
        description: 'The <code>&lt;hr&gt;</code> tag draws a <strong>horizontal line</strong> across the page to separate different sections.<br><br>➖ <strong>What is &lt;hr&gt;?</strong> It stands for "horizontal rule". It is self-closing — no closing tag needed.<br><br>➖ <strong>Why use a divider?</strong> It separates your navigation from the main content, making the page easier to read.<br><br>➖ <strong>Where is it used?</strong> Between major sections, above footers, separating content blocks.',
        task: 'After the three links, add <code>&lt;hr&gt;</code> on a new line. This separates the navigation from the main content.',
        tip: 'The &lt;hr&gt; tag is self-closing — never write &lt;/hr&gt;. It is one of the few void elements in HTML.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<hr>') !== -1; },
        getHint: function (code) { if (code.indexOf('<hr>') === -1) return 'Add &lt;hr&gt; after the links to create a horizontal divider.'; return 'Place &lt;hr&gt; on its own line after the navigation links.'; },
        successMsg: 'Perfect! The hr tag draws a line, separating navigation from page content.',
        errorMsg: 'Add an <hr> tag after the navigation links.',
      },
      {
        id: 5,
        title: 'Add a Main Heading',
        description: 'The <code>&lt;h1&gt;</code> tag is the most important heading on your page. It is the main title that tells visitors and search engines what your page is about.<br><br>📰 <strong>What is &lt;h1&gt;?</strong> The primary heading. Browsers display it in large, bold text. Every page should have exactly one &lt;h1&gt;.<br><br>📰 <strong>Why use &lt;h1&gt;?</strong> It establishes the main topic. Search engines use it to understand your page content.<br><br>📰 <strong>Where is it used?</strong> At the top of the page content, as the main headline greeting visitors.',
        task: 'After the <code>&lt;hr&gt;</code>, add <code>&lt;h1&gt;Welcome to My Website&lt;/h1&gt;</code>. This is the main heading visitors see first.',
        tip: 'Every webpage should have exactly one &lt;h1&gt; tag. It tells search engines: "this is the page topic."',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h1>Welcome to My Website</h1>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h1>') === -1) return 'Add &lt;h1&gt;Welcome to My Website&lt;/h1&gt; after the hr.'; if (code.indexOf('Welcome to My Website') === -1) return 'Your h1 should say "Welcome to My Website".'; if (code.indexOf('</h1>') === -1) return 'Close your h1 tag with &lt;/h1&gt;.'; return 'Write exactly: &lt;h1&gt;Welcome to My Website&lt;/h1&gt;'; },
        successMsg: 'Awesome! Your page now has a welcoming main heading. First impressions matter!',
        errorMsg: 'Add <h1>Welcome to My Website</h1> after the hr tag.',
      },
      {
        id: 6,
        title: 'Add a Paragraph',
        description: 'The <code>&lt;p&gt;</code> tag creates a <strong>paragraph</strong> — a block of text. Paragraphs are the most common way to display text on the web.<br><br>📝 <strong>What is &lt;p&gt;?</strong> It wraps a paragraph of text. Browsers automatically add space before and after each paragraph.<br><br>📝 <strong>Why use paragraphs?</strong> They break content into readable chunks. Without them, text runs together.<br><br>📝 <strong>Where are they used?</strong> Articles, descriptions, about text — any written content on the web.',
        task: 'After the <code>&lt;h1&gt;</code>, add <code>&lt;p&gt;This is my personal website built with HTML.&lt;/p&gt;</code>.',
        tip: 'Always close your &lt;p&gt; tags with &lt;/p&gt;. Forgetting the closing tag is a common beginner mistake.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<p>This is my personal website built with HTML.</p>') !== -1; },
        getHint: function (code) { if (code.indexOf('<p>') === -1) return 'Add a &lt;p&gt; tag after the h1 heading.'; if (code.indexOf('This is my personal website built with HTML.') === -1) return 'Your paragraph should say "This is my personal website built with HTML."'; if (code.indexOf('</p>') === -1) return 'Close your paragraph with &lt;/p&gt;.'; return 'Write exactly: &lt;p&gt;This is my personal website built with HTML.&lt;/p&gt;'; },
        successMsg: 'Wonderful! Your page now has a paragraph introducing visitors to your site.',
        errorMsg: 'Add <p>This is my personal website built with HTML.</p> after the h1.',
      },
      {
        id: 7,
        title: 'Add a Line Break',
        description: 'The <code>&lt;br&gt;</code> tag creates a <strong>line break</strong> inside a paragraph. It moves content to the next line without creating a new paragraph.<br><br>↩️ <strong>What is &lt;br&gt;?</strong> A self-closing tag — no closing tag needed. It moves everything after it to the next line.<br><br>↩️ <strong>Why use line breaks?</strong> For addresses, poems, or splitting text across lines inside the same paragraph.<br><br>↩️ <strong>Where is it used?</strong> When you want a new line without the extra space that a new paragraph creates.',
        task: 'Split the paragraph into two lines by adding a <code>&lt;br&gt;</code> after "website". Change it to: <code>&lt;p&gt;This is my personal website&lt;br&gt;built with HTML.&lt;/p&gt;</code>',
        tip: 'Never write &lt;br&gt;&lt;/br&gt; — that is wrong. Just &lt;br&gt; by itself is correct.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website built with HTML.</p>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<br>') !== -1 && code.indexOf('This is my personal website') !== -1 && code.indexOf('built with HTML.') !== -1; },
        getHint: function (code) { if (code.indexOf('<br>') === -1) return 'Add &lt;br&gt; inside the paragraph after "website".'; if (code.indexOf('This is my personal website') === -1) return 'Keep "This is my personal website" before the &lt;br&gt;.'; if (code.indexOf('built with HTML.') === -1) return 'Put "built with HTML." after the &lt;br&gt; on the second line.'; return 'Change your paragraph to: &lt;p&gt;This is my personal website&lt;br&gt;built with HTML.&lt;/p&gt;'; },
        successMsg: 'Excellent! The &lt;br&gt; split your paragraph into two lines. See the break in the preview!',
        errorMsg: 'Add a <br> inside the paragraph: <p>This is my personal website<br>built with HTML.</p>',
      },
      {
        id: 8,
        title: 'About Heading',
        description: 'The <code>&lt;h2&gt;</code> tag creates a <strong>section heading</strong> — one level below the main h1. It introduces a new major section on your page.<br><br>📰 <strong>What is &lt;h2&gt;?</strong> It is a level-2 heading. Browsers display it smaller than h1 but larger than h3. It tells readers "this is a new section."<br><br>📰 <strong>Why use h2?</strong> It creates a clear hierarchy. Search engines use heading structure to understand your content organization.<br><br>📰 <strong>Where is it used?</strong> Section titles — like "About Me", "My Skills", or "Contact" — anywhere you start a new content section.',
        task: 'After the paragraph, add an <code>&lt;h2&gt;About Me&lt;/h2&gt;</code> heading to start a new section about yourself.',
        tip: 'Use &lt;h2&gt; for major sections and &lt;h3&gt; for subsections. This creates a readable document outline.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>About Me</h2>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>') === -1) return 'Add an &lt;h2&gt; tag for your section heading.'; if (code.indexOf('About Me') === -1) return 'Your &lt;h2&gt; should say "About Me".'; if (code.indexOf('</h2>') === -1) return 'Close your &lt;h2&gt; with &lt;/h2&gt;.'; return 'Write exactly: &lt;h2&gt;About Me&lt;/h2&gt; after the paragraph.'; },
        successMsg: 'Great! Your page now has an About Me section heading.',
        errorMsg: 'Add <h2>About Me</h2> after the paragraph.',
      },
      {
        id: 9,
        title: 'Strong & Emphasis',
        description: 'The <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> tags add <strong>meaning</strong> to text. &lt;strong&gt; indicates strong importance (bold), and &lt;em&gt; indicates emphasis (italic).<br><br>💪 <strong>What is &lt;strong&gt;?</strong> It shows that text is important. Browsers display it as bold. Screen readers use a different tone.<br><br>💪 <strong>What is &lt;em&gt;?</strong> It adds emphasis to text. Browsers display it as italic. Use it to stress certain words.<br><br>💪 <strong>Where are they used?</strong> Key terms, warnings, important notices — anywhere you want to highlight or emphasize words.',
        task: 'After the h2, add a paragraph: <code>&lt;p&gt;&lt;strong&gt;HTML&lt;/strong&gt; is the &lt;em&gt;foundation&lt;/em&gt; of the web.&lt;/p&gt;</code>',
        tip: 'Use &lt;strong&gt; instead of &lt;b&gt; and &lt;em&gt; instead of &lt;i&gt; for better accessibility and SEO.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<strong>HTML</strong>') !== -1 && code.indexOf('<em>foundation</em>') !== -1; },
        getHint: function (code) { if (code.indexOf('<strong>HTML</strong>') === -1) return 'Wrap "HTML" in &lt;strong&gt; tags: &lt;strong&gt;HTML&lt;/strong&gt;'; if (code.indexOf('<em>foundation</em>') === -1) return 'Wrap "foundation" in &lt;em&gt; tags: &lt;em&gt;foundation&lt;/em&gt;'; return 'Your paragraph should be: &lt;p&gt;&lt;strong&gt;HTML&lt;/strong&gt; is the &lt;em&gt;foundation&lt;/em&gt; of the web.&lt;/p&gt;'; },
        successMsg: 'Excellent! You used strong and em to add meaning and emphasis to your text.',
        errorMsg: 'Add a paragraph with <strong>HTML</strong> and <em>foundation</em> after the h2.',
      },
      {
        id: 10,
        title: 'Horizontal Rule & Small',
        description: 'The <code>&lt;hr&gt;</code> tag draws a horizontal line to separate sections, and the <code>&lt;small&gt;</code> tag displays text in a smaller size — perfect for copyright notices.<br><br>➖ <strong>What is &lt;hr&gt;?</strong> A self-closing tag that draws a line across the page. It visually divides content sections.<br><br>▶ <strong>What is &lt;small&gt;?</strong> It makes text one size smaller. Use it for disclaimers, copyright, and legal text.<br><br>▶ <strong>Where is it used?</strong> &lt;hr&gt; between sections, &lt;small&gt; in footers for copyright &amp; legal text.',
        task: 'Add a <code>&lt;hr&gt;</code> followed by <code>&lt;p&gt;&lt;small&gt;&amp;copy; 2026 MySite. All rights reserved.&lt;/small&gt;&lt;/p&gt;</code> after the paragraph.',
        tip: 'The &amp;copy; entity displays the copyright symbol &copy;. HTML entities always start with &amp; and end with ;.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<small>&copy; 2026') !== -1 && code.indexOf('<hr>') !== -1; },
        getHint: function (code) { if (code.indexOf('<hr>') === -1) return 'Add &lt;hr&gt; to create a divider before the copyright.'; if (code.indexOf('<small>') === -1) return 'Wrap the copyright text in &lt;small&gt; tags.'; if (code.indexOf('&copy;') === -1) return 'Use &amp;copy; for the copyright symbol.'; return 'Add a &lt;hr&gt; then &lt;p&gt;&lt;small&gt;&amp;copy; 2026 MySite. All rights reserved.&lt;/small&gt;&lt;/p&gt;'; },
        successMsg: 'Perfect! You added a divider and a copyright notice with the small tag.',
        errorMsg: 'Add an <hr> and a paragraph with <small>&copy; 2026 MySite. All rights reserved.</small>',
      },
      {
        id: 11,
        title: 'Unordered List',
        description: 'The <code>&lt;ul&gt;</code> tag creates an <strong>unordered list</strong> with bullet points. Each item is wrapped in <code>&lt;li&gt;</code> tags.<br><br>📋 <strong>What is &lt;ul&gt;?</strong> It stands for "unordered list." Browsers display bullet points before each list item.<br><br>📋 <strong>Why use unordered lists?</strong> They group related items where order does not matter — like features, skills, or ingredients.<br><br>📋 <strong>Where are they used?</strong> Navigation menus, feature lists, skill sets, any grouped items without a specific sequence.',
        task: 'Add a <code>&lt;h2&gt;My Skills&lt;/h2&gt;</code> heading, then an unordered list: <code>&lt;ul&gt;&lt;li&gt;HTML&lt;/li&gt;&lt;li&gt;CSS&lt;/li&gt;&lt;li&gt;JavaScript&lt;/li&gt;&lt;/ul&gt;</code>',
        tip: 'Use &lt;ul&gt; when order does not matter (bullet list) and &lt;ol&gt; when order matters (numbered list).',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>My Skills</h2>') !== -1 && code.indexOf('<ul>') !== -1 && code.indexOf('<li>HTML</li>') !== -1 && code.indexOf('<li>CSS</li>') !== -1 && code.indexOf('<li>JavaScript</li>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>My Skills</h2>') === -1) return 'Add &lt;h2&gt;My Skills&lt;/h2&gt; as the section heading.'; if (code.indexOf('<ul>') === -1) return 'Start the list with &lt;ul&gt;.'; if (code.indexOf('<li>HTML</li>') === -1) return 'Add &lt;li&gt;HTML&lt;/li&gt; as the first item.'; if (code.indexOf('<li>CSS</li>') === -1) return 'Add &lt;li&gt;CSS&lt;/li&gt; as the second item.'; if (code.indexOf('<li>JavaScript</li>') === -1) return 'Add &lt;li&gt;JavaScript&lt;/li&gt; as the third item.'; return 'Close your list with &lt;/ul&gt;.'; },
        successMsg: 'Excellent! You created an unordered list showing your skills with bullet points.',
        errorMsg: 'Add an <h2>My Skills</h2> heading and a <ul> with HTML, CSS, and JavaScript list items.',
      },
      {
        id: 12,
        title: 'Ordered List',
        description: 'The <code>&lt;ol&gt;</code> tag creates an <strong>ordered list</strong> with numbered items. Use it when the sequence of items matters.<br><br>🔢 <strong>What is &lt;ol&gt;?</strong> It stands for "ordered list." Browsers automatically number each list item: 1, 2, 3...<br><br>🔢 <strong>Why use ordered lists?</strong> They show steps, rankings, or any content where order is important — like instructions or timelines.<br><br>🔢 <strong>Where are they used?</strong> Step-by-step guides, top 10 lists, recipes, instructions, table of contents.',
        task: 'Add a <code>&lt;h2&gt;My Goals&lt;/h2&gt;</code> heading, then an ordered list: <code>&lt;ol&gt;&lt;li&gt;Learn HTML&lt;/li&gt;&lt;li&gt;Build a website&lt;/li&gt;&lt;li&gt;Get a job&lt;/li&gt;&lt;/ol&gt;</code>',
        tip: 'Use &lt;ol&gt; when the order matters (steps, rankings) and &lt;ul&gt; when it does not (features, ingredients).',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>My Goals</h2>') !== -1 && code.indexOf('<ol>') !== -1 && code.indexOf('<li>Learn HTML</li>') !== -1 && code.indexOf('<li>Build a website</li>') !== -1 && code.indexOf('<li>Get a job</li>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>My Goals</h2>') === -1) return 'Add &lt;h2&gt;My Goals&lt;/h2&gt; as the section heading.'; if (code.indexOf('<ol>') === -1) return 'Start the list with &lt;ol&gt;.'; if (code.indexOf('<li>Learn HTML</li>') === -1) return 'Add &lt;li&gt;Learn HTML&lt;/li&gt; as the first item.'; if (code.indexOf('<li>Build a website</li>') === -1) return 'Add &lt;li&gt;Build a website&lt;/li&gt; as the second item.'; if (code.indexOf('<li>Get a job</li>') === -1) return 'Add &lt;li&gt;Get a job&lt;/li&gt; as the third item.'; return 'Close your list with &lt;/ol&gt;.'; },
        successMsg: 'Great! You added an ordered list showing your goals with numbered steps.',
        errorMsg: 'Add an <h2>My Goals</h2> heading and an <ol> with Learn HTML, Build a website, and Get a job.',
      },
      {
        id: 13,
        title: 'Nested List',
        description: 'Lists can be <strong>nested</strong> — a list inside another list. This creates subcategories under a main item.<br><br>▶ <strong>What is a nested list?</strong> A &lt;ul&gt; or &lt;ol&gt; placed inside an &lt;li&gt; of another list. The inner list is indented further.<br><br>▶ <strong>Why nest lists?</strong> They organize hierarchical information — categories with subcategories, folders with files, menus with submenus.<br><br>▶ <strong>Where are they used?</strong> Site maps, navigation dropdowns, tree views, outlines, multi-level categories.',
        task: 'Add a <code>&lt;h2&gt;Topics&lt;/h2&gt;</code> heading, then a nested list: <code>&lt;ul&gt;&lt;li&gt;HTML Basics&lt;ul&gt;&lt;li&gt;Tags&lt;/li&gt;&lt;li&gt;Forms&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;CSS Styling&lt;/li&gt;&lt;/ul&gt;</code>',
        tip: 'Place the inner &lt;ul&gt; inside the &lt;li&gt; but before the closing &lt;/li&gt;. The browser indents it automatically.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<ul><li>HTML Basics<ul>') !== -1 || code.indexOf('<li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>Topics</h2>') === -1) return 'Add &lt;h2&gt;Topics&lt;/h2&gt; as the section heading.'; if (code.indexOf('<ul><li>HTML Basics<ul>') === -1 && code.indexOf('<li>HTML Basics') === -1) return 'Start with &lt;ul&gt;&lt;li&gt;HTML Basics and nest a new &lt;ul&gt; inside it.'; if (code.indexOf('<li>Tags</li>') === -1) return 'Add &lt;li&gt;Tags&lt;/li&gt; inside the nested list.'; if (code.indexOf('<li>Forms</li>') === -1) return 'Add &lt;li&gt;Forms&lt;/li&gt; inside the nested list.'; return 'Make sure "CSS Styling" is a sibling of "HTML Basics" in the outer list.'; },
        successMsg: 'Perfect! You created a nested list with sub-items indented under the main topic.',
        errorMsg: 'Add a Topics heading and a nested ul with HTML Basics (Tags, Forms) and CSS Styling.',
      },
      {
        id: 14,
        title: 'Image Tag',
        description: 'The <code>&lt;img&gt;</code> tag <strong>embeds an image</strong> into your webpage. It is self-closing — no closing tag needed!<br><br>🖼️ <strong>What is &lt;img&gt;?</strong> It displays an image. The <code>src</code> attribute tells the browser where the image file is. The <code>alt</code> attribute provides text for accessibility.<br><br>🖼️ <strong>Why use images?</strong> Images make webpages visually engaging and professional. They communicate ideas faster than text.<br><br>🖼️ <strong>Where are they used?</strong> Photos, icons, banners, product pictures, galleries — images are everywhere on the web!',
        task: 'Add an image: <code>&lt;img src="https://picsum.photos/200" alt="Random image"&gt;</code> after the lists.',
        tip: 'Always include the alt attribute. It helps visually impaired users and improves SEO. If the image fails to load, alt text appears instead.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('src="https://picsum.photos/200"') !== -1 && code.indexOf('alt="Random image"') !== -1; },
        getHint: function (code) { if (code.indexOf('<img') === -1) return 'Add an &lt;img&gt; tag after the lists.'; if (code.indexOf('src=') === -1) return 'Add src="https://picsum.photos/200" to the image.'; if (code.indexOf('alt=') === -1) return 'Add alt="Random image" for accessibility.'; if (code.indexOf('picsum.photos/200') === -1) return 'The src should be https://picsum.photos/200'; return 'Write: &lt;img src="https://picsum.photos/200" alt="Random image"&gt;'; },
        successMsg: 'Awesome! You added an image to your webpage with proper src and alt attributes.',
        errorMsg: 'Add <img src="https://picsum.photos/200" alt="Random image"> after the lists.',
      },
      {
        id: 15,
        title: 'External Links',
        description: 'The <code>target="_blank"</code> attribute makes a link open in a <strong>new browser tab</strong>. This keeps your website open in the original tab.<br><br>▶ <strong>What is target="_blank"?</strong> It tells the browser to open the linked page in a new tab. Without it, links open in the same tab and users leave your site.<br><br>▶ <strong>Why use _blank?</strong> When linking to external websites, _blank keeps your page open. Users can easily return to your content.<br><br>▶ <strong>Where is it used?</strong> External links, references, sponsored content, download links — any link that takes users away from your site.',
        task: 'Add a link: <code>&lt;a href="https://example.com" target="_blank"&gt;Visit Example&lt;/a&gt;</code> after the image.',
        tip: 'Always use target="_blank" for external links so your website stays open in the background.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n</body>\n</html>',
        validate: function (code) { return code.indexOf('target="_blank"') !== -1 && code.indexOf('href="https://example.com"') !== -1; },
        getHint: function (code) { if (code.indexOf('href="https://example.com"') === -1) return 'Add a link with href="https://example.com".'; if (code.indexOf('target=') === -1) return 'Add target="_blank" to make it open in a new tab.'; if (code.indexOf('target="_blank"') === -1) return 'The target value should be "_blank" with quotes.'; if (code.indexOf('Visit Example') === -1) return 'The link text should say "Visit Example".'; return 'Write: &lt;a href="https://example.com" target="_blank"&gt;Visit Example&lt;/a&gt;'; },
        successMsg: 'Perfect! Your link now opens in a new tab, keeping your page open.',
        errorMsg: 'Add <a href="https://example.com" target="_blank">Visit Example</a> after the image.',
      },
      {
        id: 16,
        title: 'Projects Section',
        description: 'A <code>&lt;div&gt;</code> is a <strong>generic container</strong> that groups elements together. It is the most widely used HTML tag for layout and structure.<br><br>📦 <strong>What is &lt;div&gt;?</strong> A block-level container that takes up full width and starts on a new line. It groups related content.<br><br>📦 <strong>Why use a div?</strong> It organizes content into sections. With CSS, you can style and position entire groups at once.<br><br>📦 <strong>Where are they used?</strong> Wrapping sections, creating cards, building layouts — &lt;div&gt; is the building block of web layouts.',
        task: 'Add a <code>&lt;h2&gt;My Projects&lt;/h2&gt;</code> heading and a <code>&lt;div&gt;</code> container to hold your project content.',
        tip: 'Think of a &lt;div&gt; as a box that groups related items. You will add project titles, descriptions, and buttons inside it.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>My Projects</h2>') !== -1 && code.indexOf('<div>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>My Projects</h2>') === -1) return 'Add &lt;h2&gt;My Projects&lt;/h2&gt; as the section heading.'; if (code.indexOf('<div>') === -1) return 'Add a &lt;div&gt; after the heading to contain your projects.'; return 'Add the h2 heading first, then the opening &lt;div&gt; tag.'; },
        successMsg: 'Great! You started a Projects section with a div container to hold project content.',
        errorMsg: 'Add <h2>My Projects</h2> and a <div> after the link.',
      },
      {
        id: 17,
        title: 'Project Titles',
        description: 'The <code>&lt;h3&gt;</code> tag creates a <strong>subsection heading</strong> — one level below h2. Use it for titles within a section, like individual project names.<br><br>📰 <strong>What is &lt;h3&gt;?</strong> It is a level-3 heading. It is smaller than h2 and used for sub-subsections within an h2 section.<br><br>📰 <strong>Why use h3 for projects?</strong> It maintains a clear heading hierarchy. Each project gets its own h3 title inside the Projects section.<br><br>📰 <strong>Where is it used?</strong> Project names, card titles, subsection headers — anywhere you need a heading below h2 level.',
        task: 'Inside the div, add <code>&lt;h3&gt;Project One&lt;/h3&gt;</code> and <code>&lt;h3&gt;Project Two&lt;/h3&gt;</code> as the titles for your projects.',
        tip: 'Headings follow a hierarchy: h1 (page title) &gt; h2 (section) &gt; h3 (subsection). Do not skip levels.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n  <h2>My Projects</h2>\n  <div>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h3>Project One</h3>') !== -1 && code.indexOf('<h3>Project Two</h3>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h3>Project One</h3>') === -1) return 'Add &lt;h3&gt;Project One&lt;/h3&gt; as the first project title.'; if (code.indexOf('<h3>Project Two</h3>') === -1) return 'Add &lt;h3&gt;Project Two&lt;/h3&gt; as the second project title.'; return 'Add both h3 titles inside the div.'; },
        successMsg: 'Excellent! Your projects now have titles using h3 headings.',
        errorMsg: 'Add <h3>Project One</h3> and <h3>Project Two</h3> inside the div.',
      },
      {
        id: 18,
        title: 'Project Descriptions',
        description: 'Paragraphs describe your projects. Good descriptions tell visitors what you built and why it matters.<br><br>📝 <strong>What makes a good description?</strong> It should be clear and concise. Tell the reader what the project does and what you learned.<br><br>📝 <strong>Why describe projects?</strong> Descriptions provide context. A title tells the name, but the description explains the project.<br><br>📝 <strong>Where are descriptions used?</strong> Portfolio projects, case studies, product cards, blog excerpts — anywhere you showcase work.',
        task: 'Inside the div, add <code>&lt;p&gt;My first project is awesome.&lt;/p&gt;</code> and <code>&lt;p&gt;Built with HTML and CSS.&lt;/p&gt;</code> as descriptions.',
        tip: 'Keep project descriptions short and focused. A sentence or two is enough to explain what the project is about.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n  <h2>My Projects</h2>\n  <div>\n  <h3>Project One</h3>\n  <h3>Project Two</h3>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('My first project is awesome.') !== -1 && code.indexOf('Built with HTML and CSS.') !== -1; },
        getHint: function (code) { if (code.indexOf('My first project is awesome.') === -1) return 'Add &lt;p&gt;My first project is awesome.&lt;/p&gt; as the first description.'; if (code.indexOf('Built with HTML and CSS.') === -1) return 'Add &lt;p&gt;Built with HTML and CSS.&lt;/p&gt; as the second description.'; return 'Wrap each description in &lt;p&gt; tags.'; },
        successMsg: 'Great! Your projects now have descriptions explaining what you built.',
        errorMsg: 'Add two paragraph descriptions inside the div: "My first project is awesome." and "Built with HTML and CSS."',
      },
      {
        id: 19,
        title: 'Project Buttons',
        description: 'Buttons let users take action. The <code>&lt;button&gt;</code> tag creates a clickable button. Use buttons for actions like "View Project" or "Learn More".<br><br>🔘 <strong>What is &lt;button&gt;?</strong> It creates a clickable button. Text between the tags becomes the label users see and click.<br><br>🔘 <strong>Why use project buttons?</strong> They invite visitors to interact. A "View Project" button tells users they can see more details.<br><br>🔘 <strong>Where are they used?</strong> Portfolio cards, product listings, feature sections — anywhere users can take an action.',
        task: 'Add a <code>&lt;button&gt;View Project&lt;/button&gt;</code> inside the div, then close the div with <code>&lt;/div&gt;</code>.',
        tip: 'A button without JavaScript does nothing yet. Later you will learn to make them interactive with code.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n  <h2>My Projects</h2>\n  <div>\n  <h3>Project One</h3>\n  <h3>Project Two</h3>\n  <p>My first project is awesome.</p>\n  <p>Built with HTML and CSS.</p>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<button>View Project</button>') !== -1; },
        getHint: function (code) { if (code.indexOf('<button>') === -1) return 'Add a &lt;button&gt; tag inside the div.'; if (code.indexOf('View Project') === -1) return 'The button text should say "View Project".'; if (code.indexOf('</button>') === -1) return 'Close your button with &lt;/button&gt;.'; return 'Add &lt;button&gt;View Project&lt;/button&gt; then close the div with &lt;/div&gt;.'; },
        successMsg: 'Awesome! Your projects section now has a button and a properly closed div container.',
        errorMsg: 'Add <button>View Project</button> and close the div with </div>.',
      },
      {
        id: 20,
        title: 'Contact Form',
        description: 'Forms collect user input. The <code>&lt;form&gt;</code> tag wraps input fields together. The <code>&lt;input&gt;</code> tag creates different types of form controls.<br><br>📝 <strong>What is &lt;form&gt;?</strong> It groups input fields for submission. It tells the browser: "these inputs belong together."<br><br>📝 <strong>What are input types?</strong> <code>type="text"</code> creates a single-line text field. <code>type="email"</code> creates a field for email addresses.<br><br>📝 <strong>Where are forms used?</strong> Contact forms, sign-ups, logins, search bars, surveys — any page that collects user input.',
        task: 'Add a <code>&lt;h2&gt;Contact Me&lt;/h2&gt;</code> heading, then a <code>&lt;form&gt;</code> with <code>&lt;input type="text"&gt;</code> and <code>&lt;input type="email"&gt;</code>.',
        tip: 'The &lt;form&gt; tag does not display anything visible. It is a container that groups inputs for submission.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n  <h2>My Projects</h2>\n  <div>\n  <h3>Project One</h3>\n  <h3>Project Two</h3>\n  <p>My first project is awesome.</p>\n  <p>Built with HTML and CSS.</p>\n  <button>View Project</button>\n  </div>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>Contact Me</h2>') !== -1 && code.indexOf('<form>') !== -1 && code.indexOf('<input type="text">') !== -1 && code.indexOf('<input type="email">') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>Contact Me</h2>') === -1) return 'Add &lt;h2&gt;Contact Me&lt;/h2&gt; as the section heading.'; if (code.indexOf('<form>') === -1) return 'Add &lt;form&gt; to wrap your input fields.'; if (code.indexOf('<input type="text">') === -1) return 'Add &lt;input type="text"&gt; for the name field.'; if (code.indexOf('<input type="email">') === -1) return 'Add &lt;input type="email"&gt; for the email field.'; return 'Make sure both input fields are inside the &lt;form&gt; tags.'; },
        successMsg: 'Perfect! You created a contact form with text and email input fields.',
        errorMsg: 'Add <h2>Contact Me</h2>, <form>, <input type="text">, and <input type="email">.',
      },
      {
        id: 21,
        title: 'Form Placeholders',
        description: 'The <code>placeholder</code> attribute provides <strong>hint text</strong> inside an input field. It disappears when the user starts typing.<br><br>► <strong>What is placeholder?</strong> Light grey text inside an input that shows an example of what to enter. It disappears on focus or typing.<br><br>► <strong>Why use placeholders?</strong> They guide users on what to enter — like "Your Name" or "Your Email". They improve usability without extra space.<br><br>► <strong>Where are they used?</strong> Search bars, form fields, login screens — any input that benefits from an example of what to type.',
        task: 'Add placeholder attributes: <code>&lt;input type="text" placeholder="Your Name"&gt;</code> and <code>&lt;input type="email" placeholder="Your Email"&gt;</code>.',
        tip: 'Placeholders are hints, not labels. They disappear when typing, so do not rely on them for essential instructions.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n  <h2>My Projects</h2>\n  <div>\n  <h3>Project One</h3>\n  <h3>Project Two</h3>\n  <p>My first project is awesome.</p>\n  <p>Built with HTML and CSS.</p>\n  <button>View Project</button>\n  </div>\n  <h2>Contact Me</h2>\n  <form>\n  <input type="text">\n  <input type="email">\n</body>\n</html>',
        validate: function (code) { return code.indexOf('placeholder="Your Name"') !== -1 && code.indexOf('placeholder="Your Email"') !== -1; },
        getHint: function (code) { if (code.indexOf('placeholder="Your Name"') === -1) return 'Add placeholder="Your Name" to the text input.'; if (code.indexOf('placeholder="Your Email"') === -1) return 'Add placeholder="Your Email" to the email input.'; return 'Make sure both inputs have the correct placeholder text inside the attribute.'; },
        successMsg: 'Great! Your inputs now show helpful placeholder hints for users.',
        errorMsg: 'Add placeholder="Your Name" to the text input and placeholder="Your Email" to the email input.',
      },
      {
        id: 22,
        title: 'Message Area',
        description: 'The <code>&lt;textarea&gt;</code> tag creates a <strong>multi-line text input</strong> for longer messages. Unlike &lt;input&gt;, it allows multiple lines of text.<br><br>▶ <strong>What is &lt;textarea&gt;?</strong> It creates a resizable box for multi-line text. It has opening and closing tags — content between them appears inside the box.<br><br>▶ <strong>Why use textarea?</strong> Single-line inputs cannot hold paragraphs. Use textarea for messages, comments, or any longer text.<br><br>▶ <strong>Where is it used?</strong> Contact forms, comment sections, feedback forms, support tickets — anywhere users write more than a few words.',
        task: 'Add <code>&lt;textarea placeholder="Your Message"&gt;&lt;/textarea&gt;</code> inside the form, after the email input.',
        tip: 'Unlike &lt;input&gt;, &lt;textarea&gt; is NOT self-closing — you must write &lt;/textarea&gt; to close it.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n  <h2>My Projects</h2>\n  <div>\n  <h3>Project One</h3>\n  <h3>Project Two</h3>\n  <p>My first project is awesome.</p>\n  <p>Built with HTML and CSS.</p>\n  <button>View Project</button>\n  </div>\n  <h2>Contact Me</h2>\n  <form>\n  <input type="text" placeholder="Your Name">\n  <input type="email" placeholder="Your Email">\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<textarea') !== -1 && code.indexOf('placeholder="Your Message"') !== -1; },
        getHint: function (code) { if (code.indexOf('<textarea') === -1) return 'Add a &lt;textarea&gt; tag for the message field.'; if (code.indexOf('placeholder=') === -1 || code.indexOf('Your Message') === -1) return 'Add placeholder="Your Message" to the textarea.'; if (code.indexOf('</textarea>') === -1) return 'Close the textarea with &lt;/textarea&gt;.'; return 'Add &lt;textarea placeholder="Your Message"&gt;&lt;/textarea&gt; inside the form.'; },
        successMsg: 'Excellent! Your form now has a multi-line message area.',
        errorMsg: 'Add <textarea placeholder="Your Message"></textarea> inside the form.',
      },
      {
        id: 23,
        title: 'Select Dropdown',
        description: 'The <code>&lt;select&gt;</code> tag creates a <strong>dropdown menu</strong>. Each <code>&lt;option&gt;</code> tag defines one choice in the list.<br><br>📋 <strong>What is &lt;select&gt;?</strong> It creates a dropdown list. Users click to reveal options and pick one. It saves space compared to radio buttons.<br><br>📋 <strong>Why use a select?</strong> It is ideal when you have many options but only need one selection. It keeps the form compact.<br><br>📋 <strong>Where are they used?</strong> Country selectors, category filters, subject menus, any form field with predefined choices.',
        task: 'Add <code>&lt;select&gt;&lt;option&gt;General&lt;/option&gt;&lt;option&gt;Support&lt;/option&gt;&lt;/select&gt;</code> inside the form, after the textarea.',
        tip: 'Each &lt;option&gt; tag represents one choice. The text between the tags is what users see in the dropdown list.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n  <h2>My Projects</h2>\n  <div>\n  <h3>Project One</h3>\n  <h3>Project Two</h3>\n  <p>My first project is awesome.</p>\n  <p>Built with HTML and CSS.</p>\n  <button>View Project</button>\n  </div>\n  <h2>Contact Me</h2>\n  <form>\n  <input type="text" placeholder="Your Name">\n  <input type="email" placeholder="Your Email">\n  <textarea placeholder="Your Message"></textarea>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<select>') !== -1 && code.indexOf('<option>General</option>') !== -1 && code.indexOf('<option>Support</option>') !== -1; },
        getHint: function (code) { if (code.indexOf('<select>') === -1) return 'Add a &lt;select&gt; tag to create a dropdown menu.'; if (code.indexOf('<option>General</option>') === -1) return 'Add &lt;option&gt;General&lt;/option&gt; as the first option.'; if (code.indexOf('<option>Support</option>') === -1) return 'Add &lt;option&gt;Support&lt;/option&gt; as the second option.'; return 'Wrap both options inside &lt;select&gt;...&lt;/select&gt;.'; },
        successMsg: 'Perfect! Your form now has a dropdown select menu with two options.',
        errorMsg: 'Add <select> with <option>General</option> and <option>Support</option> inside the form.',
      },
      {
        id: 24,
        title: 'Level Complete!',
        description: '🎉 <strong>Congratulations!</strong> You have built a complete personal website from scratch!<br><br>🏆 <strong>What you built:</strong> A full "My Website" page with a brand name, navigation links, headings, paragraphs, line breaks, about section, text formatting, lists, images, external links, project cards, and a contact form with text inputs, dropdowns, checkboxes, and radio buttons.<br><br>🚀 <strong>What you learned:</strong> HTML document structure, semantic elements, text formatting tags, lists (ordered, unordered, nested), images, links, forms (inputs, textarea, select, checkbox, radio), and how all these pieces come together to build a real website.<br><br>🔥 <strong>What\'s next:</strong> Level 3 will teach you to build modern, professional landing pages with advanced semantic structure, cards, testimonials, pricing tables, and more!',
        task: 'Click <strong>Run</strong> to see your final completed website in the preview. You built this entire page step by step — amazing work!',
        tip: 'You now understand the core building blocks of every website on the internet. Keep going — you are on your way to becoming a web developer!',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <span>MySite</span>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n  <hr>\n  <h1>Welcome to My Website</h1>\n  <p>This is my personal website<br>built with HTML.</p>\n  <h2>About Me</h2>\n  <p><strong>HTML</strong> is the <em>foundation</em> of the web.</p>\n  <hr>\n  <p><small>&copy; 2026 MySite. All rights reserved.</small></p>\n  <h2>My Skills</h2>\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  <h2>My Goals</h2>\n  <ol><li>Learn HTML</li><li>Build a website</li><li>Get a job</li></ol>\n  <h2>Topics</h2>\n  <ul><li>HTML Basics<ul><li>Tags</li><li>Forms</li></ul></li><li>CSS Styling</li></ul>\n  <img src="https://picsum.photos/200" alt="Random image">\n  <a href="https://example.com" target="_blank">Visit Example</a>\n  <h2>My Projects</h2>\n  <div>\n  <h3>Project One</h3>\n  <h3>Project Two</h3>\n  <p>My first project is awesome.</p>\n  <p>Built with HTML and CSS.</p>\n  <button>View Project</button>\n  </div>\n  <h2>Contact Me</h2>\n  <form>\n  <input type="text" placeholder="Your Name">\n  <input type="email" placeholder="Your Email">\n  <textarea placeholder="Your Message"></textarea>\n  <select><option>General</option><option>Support</option></select>\n  <input type="checkbox">\n  <input type="radio">\n</body>\n</html>',
        validate: function () { return true; },
        getHint: function () { return ''; },
        successMsg: '🎉 Incredible! You completed Level 2 — Building a Complete Website! You built an entire personal website from scratch. Every tag, every element, every line of code was written by you. You are ready for Level 3!',
        errorMsg: '',
      },
    ],
    /* ===== LEVEL 3: BUILDING REAL MODERN WEBSITES (28 steps) ===== */
    3: [
      {
        id: 1,
        title: 'Header Section',
        description: 'The <code>&lt;header&gt;</code> tag represents introductory content at the top of a page. It typically contains a site title, logo, and tagline.<br><br>▶ <strong>What is &lt;header&gt;?</strong> It is a semantic HTML5 element that defines the top section of a page. It helps browsers and screen readers identify introductory content.<br><br>▶ <strong>Why use a header?</strong> Semantic tags improve SEO and accessibility. The header tells search engines: "this is the top of the page."<br><br>▶ <strong>Where is it used?</strong> At the top of webpages, containing site names, logos, navigation, and taglines.',
        task: 'Create a <code>&lt;header&gt;</code> with an <code>&lt;h1&gt;MyBrand&lt;/h1&gt;</code> and a <code>&lt;p&gt;Your trusted partner&lt;/p&gt;</code>.',
        tip: 'The &lt;header&gt; tag is semantic — it tells browsers and search engines this is the introductory content.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) { return code.indexOf('<header>') !== -1 && code.indexOf('</header>') !== -1 && code.indexOf('<h1>MyBrand</h1>') !== -1 && code.indexOf('<p>Your trusted partner</p>') !== -1; },
        getHint: function (code) { if (code.indexOf('<header>') === -1) return 'Start with &lt;header&gt; to create the top section.'; if (code.indexOf('</header>') === -1) return 'Close your header with &lt;/header&gt;.'; if (code.indexOf('<h1>MyBrand</h1>') === -1) return 'Add &lt;h1&gt;MyBrand&lt;/h1&gt; inside the header.'; if (code.indexOf('<p>Your trusted partner</p>') === -1) return 'Add &lt;p&gt;Your trusted partner&lt;/p&gt; as the tagline.'; return 'Your header should have an h1 and a paragraph tagline.'; },
        successMsg: 'Great start! You created a semantic header with a brand name and tagline.',
        errorMsg: 'Create a <header> with <h1>MyBrand</h1> and <p>Your trusted partner</p>.',
      },
      {
        id: 2,
        title: 'Navigation Menu',
        description: 'A navigation menu helps users explore your website. Using <code>&lt;nav&gt;</code> with an unordered list creates a well-structured, accessible menu.<br><br>▶ <strong>What is &lt;nav&gt;?</strong> It defines a block of navigation links. It tells screen readers: "this is the primary menu."<br><br>▶ <strong>Why use &lt;ul&gt; for menus?</strong> Lists are the standard accessible way to structure menus. They work with screen readers and keyboard navigation.<br><br>▶ <strong>Where is this used?</strong> Every multi-page website — typically at the top, linking to Home, About, Services, Contact.',
        task: 'Add a <code>&lt;nav&gt;</code> after the header with an unordered list containing four links: Home, About, Services, Contact.',
        tip: 'Navigation links use &lt;a href="#"&gt; for placeholder links. Replace # with real URLs when you publish.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<nav>') !== -1 && code.indexOf('</nav>') !== -1 && code.indexOf('<ul>') !== -1 && (code.match(/<a /g) || []).length >= 4; },
        getHint: function (code) { if (code.indexOf('<nav>') === -1) return 'Wrap your menu in &lt;nav&gt; tags.'; if (code.indexOf('<ul>') === -1) return 'Start your list with &lt;ul&gt;.'; var c = (code.match(/<a /g) || []).length; if (c < 4) return 'You need 4 links: Home, About, Services, Contact.'; return 'Each &lt;li&gt; should contain an &lt;a href="#"&gt; with the link text.'; },
        successMsg: 'Excellent! You built an accessible navigation menu with four links.',
        errorMsg: 'Add a <nav> with <ul> containing four <li><a href="#"> links (Home, About, Services, Contact).',
      },
      {
        id: 3,
        title: 'Hero Section',
        description: 'A hero section is the first major content visitors see. It grabs attention with a big heading, a short description, and a call-to-action button.<br><br>▶ <strong>What is a hero section?</strong> It is the prominent banner that introduces your site. It sets the tone and communicates your main message instantly.<br><br>▶ <strong>Why use hero sections?</strong> First impressions matter. A clear hero section tells visitors what you do and guides them to take action.<br><br>▶ <strong>Where are they used?</strong> Landing pages, product sites, portfolios, SaaS websites — any site that needs to make a strong first impression.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h1&gt;Welcome to Our Site&lt;/h1&gt;</code>, <code>&lt;p&gt;We build amazing web experiences.&lt;/p&gt;</code>, and <code>&lt;button&gt;Get Started&lt;/button&gt;</code>.',
        tip: 'The hero section is usually the first thing users see — make your heading clear and your call-to-action compelling!',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h1>Welcome to Our Site</h1>') !== -1 && code.indexOf('<p>We build amazing web experiences.</p>') !== -1 && code.indexOf('<button>Get Started</button>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h1>Welcome to Our Site</h1>') === -1) return 'Add &lt;h1&gt;Welcome to Our Site&lt;/h1&gt; as the hero heading.'; if (code.indexOf('<p>We build amazing web experiences.</p>') === -1) return 'Add &lt;p&gt;We build amazing web experiences.&lt;/p&gt; as the description.'; if (code.indexOf('<button>Get Started</button>') === -1) return 'Add &lt;button&gt;Get Started&lt;/button&gt; as the call-to-action.'; return 'Wrap the hero content in a &lt;section&gt; tag.'; },
        successMsg: 'Perfect! Your hero section has a heading, description, and call-to-action button.',
        errorMsg: 'Add a <section> with <h1>Welcome to Our Site</h1>, description, and <button>Get Started</button>.',
      },
      {
        id: 4,
        title: 'Hero Section Divider',
        description: 'Adding a visual divider after the hero section helps separate it from the next section. The <code>&lt;hr&gt;</code> tag creates a horizontal line.<br><br>▶ <strong>What is &lt;hr&gt;?</strong> It stands for "horizontal rule" and draws a line across the page. It is a self-closing tag.<br><br>▶ <strong>Why use dividers?</strong> They improve visual hierarchy and make the page easier to scan.<br><br>▶ <strong>Where are they used?</strong> Between major sections, above footers, separating content blocks.',
        task: 'Add a <code>&lt;hr&gt;</code> after the hero section to visually separate it from the next section.',
        tip: 'The &lt;hr&gt; tag is self-closing — do not write &lt;/hr&gt;.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<hr>') !== -1; },
        getHint: function (code) { if (code.indexOf('<hr>') === -1) return 'Add &lt;hr&gt; after the hero section to create a visual divider.'; return 'Place the &lt;hr&gt; between the hero section and whatever comes next.'; },
        successMsg: 'Great! The hero section is now separated with a horizontal rule.',
        errorMsg: 'Add an <hr> tag after the hero section to separate it visually.',
      },
      {
        id: 5,
        title: 'About Section',
        description: 'The About section tells visitors who you are and what you do. It builds trust and credibility.<br><br>▶ <strong>What is an About section?</strong> It introduces your company or yourself. It explains your mission, values, or history.<br><br>▶ <strong>Why have an About section?</strong> Visitors want to know who is behind the website. A good About section builds trust and connection.<br><br>▶ <strong>Where is it used?</strong> Every business website, portfolio, blog — it is one of the most visited pages on any site.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;About Us&lt;/h2&gt;</code>, <code>&lt;p&gt;We are a team of &lt;strong&gt;creative developers&lt;/strong&gt; passionate about &lt;em&gt;web technology&lt;/em&gt;.&lt;/p&gt;</code>, <code>&lt;hr&gt;</code>, and <code>&lt;p&gt;&lt;small&gt;Established 2026&lt;/small&gt;&lt;/p&gt;</code>.',
        tip: 'Use &lt;strong&gt; for important keywords and &lt;em&gt; for emphasis. These improve accessibility.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>About Us</h2>') !== -1 && code.indexOf('<strong>creative developers</strong>') !== -1 && code.indexOf('<em>web technology</em>') !== -1 && code.indexOf('<small>Established 2026</small>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>About Us</h2>') === -1) return 'Add &lt;h2&gt;About Us&lt;/h2&gt; as the section heading.'; if (code.indexOf('<strong>creative developers</strong>') === -1) return 'Wrap "creative developers" in &lt;strong&gt; tags.'; if (code.indexOf('<em>web technology</em>') === -1) return 'Wrap "web technology" in &lt;em&gt; tags.'; if (code.indexOf('<small>Established 2026</small>') === -1) return 'Add &lt;small&gt;Established 2026&lt;/small&gt; after the hr.'; return 'Wrap the about content in a &lt;section&gt; tag.'; },
        successMsg: 'Excellent! The About section tells visitors who you are with proper text formatting.',
        errorMsg: 'Add a <section> with About Us heading, formatted paragraph, hr, and small text.',
      },
      {
        id: 6,
        title: 'Services Section — Part 1',
        description: 'Services sections showcase what you offer. Service cards group related information into scannable blocks.<br><br>▶ <strong>What are service cards?</strong> They are &lt;div&gt; containers that each display one service. Grouping them in a &lt;section&gt; tells browsers this is distinct content.<br><br>▶ <strong>Why use cards?</strong> They organize information into digestible, scannable blocks. Users can quickly compare different services.<br><br>▶ <strong>Where are they used?</strong> Business websites, portfolio pages, SaaS product pages — anywhere you list multiple offerings.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;Our Services&lt;/h2&gt;</code> and a wrapping <code>&lt;div&gt;</code>. Inside the div, create the first service card: <code>&lt;div&gt;&lt;h3&gt;Web Design&lt;/h3&gt;&lt;p&gt;Beautiful and responsive designs.&lt;/p&gt;&lt;button&gt;Learn More&lt;/button&gt;&lt;/div&gt;</code>.',
        tip: 'Each service card should be a &lt;div&gt; with a heading, description, and call-to-action button.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>Our Services</h2>') !== -1 && code.indexOf('<h3>Web Design</h3>') !== -1 && code.indexOf('<p>Beautiful and responsive designs.</p>') !== -1 && code.indexOf('<button>Learn More</button>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>Our Services</h2>') === -1) return 'Add &lt;h2&gt;Our Services&lt;/h2&gt; as the section heading.'; if (code.indexOf('<h3>Web Design</h3>') === -1) return 'Add &lt;h3&gt;Web Design&lt;/h3&gt; for the first service card.'; if (code.indexOf('<p>Beautiful and responsive designs.</p>') === -1) return 'Add a paragraph describing Web Design.'; return 'Add a &lt;button&gt;Learn More&lt;/button&gt; inside the first service card.'; },
        successMsg: 'Great! You started the services section with a card for Web Design.',
        errorMsg: 'Add a <section> with <h2>Our Services</h2> and the first service card (Web Design).',
      },
      {
        id: 7,
        title: 'Services Section — Part 2',
        description: 'Completing the services grid with multiple cards makes your offerings clear. Three cards in a row is a standard web design pattern.<br><br>▶ <strong>Why three cards?</strong> Three items balance well visually and provide enough variety without overwhelming users.<br><br>▶ <strong>What goes in cards?</strong> Each card has a heading, brief description, and a call-to-action button. Keep descriptions short and scannable.<br><br>▶ <strong>Where is this pattern used?</strong> Feature sections, pricing tables, team members, blog previews — three-column card layouts are everywhere.',
        task: 'Add two more service cards inside the wrapping div: <code>&lt;div&gt;&lt;h3&gt;Development&lt;/h3&gt;&lt;p&gt;Clean and efficient code.&lt;/p&gt;&lt;button&gt;Learn More&lt;/button&gt;&lt;/div&gt;</code> and <code>&lt;div&gt;&lt;h3&gt;Support&lt;/h3&gt;&lt;p&gt;24/7 customer support.&lt;/p&gt;&lt;button&gt;Learn More&lt;/button&gt;&lt;/div&gt;</code>.',
        tip: 'Keep card content consistent — each card should have the same structure for a clean, professional look.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h3>Development</h3>') !== -1 && code.indexOf('<h3>Support</h3>') !== -1 && code.indexOf('<p>Clean and efficient code.</p>') !== -1 && code.indexOf('<p>24/7 customer support.</p>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h3>Development</h3>') === -1) return 'Add &lt;h3&gt;Development&lt;/h3&gt; for the second card.'; if (code.indexOf('<p>Clean and efficient code.</p>') === -1) return 'Add a paragraph for the Development card.'; if (code.indexOf('<h3>Support</h3>') === -1) return 'Add &lt;h3&gt;Support&lt;/h3&gt; for the third card.'; return 'Each card needs a heading, paragraph, and button (Learn More).'; },
        successMsg: 'Fantastic! You completed the services section with three professional cards.',
        errorMsg: 'Add Development and Support cards, each with h3, p, and button.',
      },
      {
        id: 8,
        title: 'Team Section — Part 1',
        description: 'Team sections introduce the people behind the website. Adding profile pictures and roles makes the team feel real and approachable.<br><br>▶ <strong>What is a team section?</strong> It displays team members with their photos, names, and roles. Humanizes your brand.<br><br>▶ <strong>Why show your team?</strong> People trust people. Showing real faces builds connection and credibility with visitors.<br><br>▶ <strong>Where are they used?</strong> Agency websites, startup pages, about pages, professional service sites.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;Our Team&lt;/h2&gt;</code> and a wrapping <code>&lt;div&gt;</code>. Add the first team card: a <code>&lt;div&gt;</code> with <code>&lt;img src="https://picsum.photos/150" alt="Team member 1"&gt;</code>, <code>&lt;p&gt;&lt;strong&gt;Jane Doe&lt;/strong&gt;&lt;/p&gt;</code>, <code>&lt;p&gt;CEO &amp; Founder&lt;/p&gt;</code>.',
        tip: 'Use picsum.photos for placeholder images — they generate random professional-looking photos.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>Our Team</h2>') !== -1 && code.indexOf('alt="Team member 1"') !== -1 && code.indexOf('<strong>Jane Doe</strong>') !== -1 && code.indexOf('CEO & Founder') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>Our Team</h2>') === -1) return 'Add &lt;h2&gt;Our Team&lt;/h2&gt; as the section heading.'; if (code.indexOf('src="https://picsum.photos/150"') === -1) return 'Add &lt;img src="https://picsum.photos/150" alt="Team member 1"&gt;'; if (code.indexOf('<strong>Jane Doe</strong>') === -1) return 'Add the team member name in &lt;strong&gt; tags.'; if (code.indexOf('CEO & Founder') === -1) return 'Add the role as a paragraph: CEO &amp; Founder'; return 'Wrap the team card in a &lt;div&gt; and the whole section in a &lt;section&gt;.'; },
        successMsg: 'Great! You added the first team member card with photo, name, and role.',
        errorMsg: 'Add a <section> with <h2>Our Team</h2> and a team member card with photo, name, and role.',
      },
      {
        id: 9,
        title: 'Team Section — Part 2',
        description: 'Completing the team section with multiple members shows your organization has depth and expertise.<br><br>▶ <strong>Why a second team member?</strong> It shows your team has multiple people with different skills. This builds more trust and credibility.<br><br>▶ <strong>What makes good team cards?</strong> Professional photos, real-sounding names, clear roles, and consistent formatting across all cards.<br><br>▶ <strong>Where is this used?</strong> Agency pages, startup "About" sections, consulting firms — anywhere people matter.',
        task: 'Add a second team card inside the wrapping div: <code>&lt;div&gt;&lt;img src="https://picsum.photos/150" alt="Team member 2"&gt;&lt;p&gt;&lt;strong&gt;John Smith&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;Lead Developer&lt;/p&gt;&lt;/div&gt;</code>.',
        tip: 'Use different alt text for each team member image to improve accessibility.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n    </div>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('alt="Team member 2"') !== -1 && code.indexOf('<strong>John Smith</strong>') !== -1 && code.indexOf('Lead Developer') !== -1; },
        getHint: function (code) { if (code.indexOf('alt="Team member 2"') === -1) return 'Add &lt;img src="https://picsum.photos/150" alt="Team member 2"&gt;'; if (code.indexOf('<strong>John Smith</strong>') === -1) return 'Add &lt;strong&gt;John Smith&lt;/strong&gt; as the name.'; if (code.indexOf('Lead Developer') === -1) return 'Add &lt;p&gt;Lead Developer&lt;/p&gt; as the role.'; return 'Add a second team card with image, name in strong, and role.'; },
        successMsg: 'Excellent! The team section now has two members.',
        errorMsg: 'Add a second team card with image, name (John Smith), and role (Lead Developer).',
      },
      {
        id: 10,
        title: 'Gallery Section',
        description: 'A gallery displays multiple images. Using proper <code>alt</code> text makes your gallery accessible to everyone.<br><br>🖼️ <strong>What is an image gallery?</strong> A group of images displayed together. Each image needs a description for accessibility.<br><br>🖼️ <strong>Why use alt text?</strong> Screen readers describe images using alt text. It also shows when an image fails to load.<br><br>🖼️ <strong>Where are galleries used?</strong> Portfolios, product pages, photography blogs, real estate listings — anywhere visual content matters.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;Gallery&lt;/h2&gt;</code> and three images with alt attributes.',
        tip: 'Always include unique alt text for each image to describe what it shows.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>Gallery</h2>') !== -1 && (code.match(/<img /g) || []).length >= 5 || (code.match(/alt="/g) || []).length >= 5; },
        getHint: function (code) { if (code.indexOf('<h2>Gallery</h2>') === -1) return 'Add &lt;h2&gt;Gallery&lt;/h2&gt; inside a new section.'; if ((code.match(/<img /g) || []).length < 5) return 'Add three gallery images each with src and alt attributes.'; return 'Each image needs a unique alt attribute describing it.'; },
        successMsg: 'Great! Your gallery section displays multiple images with alt text.',
        errorMsg: 'Add a <section> with <h2>Gallery</h2> and three images with alt text.',
      },
      {
        id: 11,
        title: 'Testimonials Section',
        description: 'Testimonials show what customers say about your business. The <code>&lt;blockquote&gt;</code> tag is specifically for quoted text.<br><br>💬 <strong>What is &lt;blockquote&gt;?</strong> It represents a section quoted from another source. Browsers typically indent it visually.<br><br>💬 <strong>What is &lt;strong&gt;?</strong> It gives text strong importance. Use it for the customer name to make it stand out.<br><br>💬 <strong>Where are testimonials used?</strong> Landing pages, product pages, service websites — social proof builds trust with potential customers.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;What Our Clients Say&lt;/h2&gt;</code>, a <code>&lt;blockquote&gt;</code> with a quote, and a <code>&lt;p&gt;&lt;strong&gt;</code> for the customer name.',
        tip: 'Use &lt;blockquote&gt; for quoted text and &lt;strong&gt; to emphasize the customer name.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <img src="https://picsum.photos/200" alt="Project 1">\n    <img src="https://picsum.photos/200" alt="Project 2">\n    <img src="https://picsum.photos/200" alt="Project 3">\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<blockquote>') !== -1 && code.indexOf('</blockquote>') !== -1 && code.indexOf('<strong>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>What Our Clients Say</h2>') === -1) return 'Add &lt;h2&gt;What Our Clients Say&lt;/h2&gt;.'; if (code.indexOf('<blockquote>') === -1) return 'Add a &lt;blockquote&gt; with a customer testimonial.'; if (code.indexOf('<strong>') === -1) return 'Add the customer name in &lt;strong&gt; tags after the quote.'; return 'The testimonial section should have a heading, blockquote, and customer name in strong.'; },
        successMsg: 'Excellent! You added a testimonial with blockquote and customer name.',
        errorMsg: 'Add a <section> with testimonials heading, blockquote, and customer name in <strong>.',
      },
      {
        id: 12,
        title: 'Pricing Section',
        description: 'A pricing section displays your plans or packages. Each tier is typically shown as a card with a price and a call-to-action button.<br><br>▶ <strong>What is a pricing card?</strong> A container that shows a plan name, price, and a button to choose it. Multiple cards let users compare options.<br><br>▶ <strong>Why show pricing?</strong> It helps users understand your value and choose the right plan for their needs.<br><br>▶ <strong>Where is it used?</strong> SaaS products, membership sites, service packages, subscription services.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;Pricing&lt;/h2&gt;</code> and three pricing cards: Basic $10/month, Pro $20/month, Enterprise $50/month with Choose buttons.',
        tip: 'Each pricing card should have the same structure for easy comparison — heading, price, and button.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <img src="https://picsum.photos/200" alt="Project 1">\n    <img src="https://picsum.photos/200" alt="Project 2">\n    <img src="https://picsum.photos/200" alt="Project 3">\n  </section>\n  <section>\n    <h2>What Our Clients Say</h2>\n    <blockquote>Amazing service! Highly recommended.</blockquote>\n    <p><strong>— Sarah Johnson</strong></p>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('Basic') !== -1 && code.indexOf('Pro') !== -1 && code.indexOf('Enterprise') !== -1 && (code.match(/<button>/g) || []).length >= 3 && code.indexOf('$10') !== -1 && code.indexOf('$20') !== -1 && code.indexOf('$50') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>Pricing</h2>') === -1) return 'Add &lt;h2&gt;Pricing&lt;/h2&gt; inside a new section.'; if (code.indexOf('Basic') === -1) return 'Create a card with &lt;h3&gt;Basic&lt;/h3&gt;.'; if (code.indexOf('Pro') === -1) return 'Create a card with &lt;h3&gt;Pro&lt;/h3&gt;.'; if (code.indexOf('Enterprise') === -1) return 'Create a card with &lt;h3&gt;Enterprise&lt;/h3&gt;.'; return 'Each card needs an h3, price paragraph, and Choose button.'; },
        successMsg: 'Fantastic! You created three pricing tiers for users to compare.',
        errorMsg: 'Add a <section> with <h2>Pricing</h2> and three pricing cards: Basic $10, Pro $20, Enterprise $50.',
      },
      {
        id: 13,
        title: 'FAQ Section',
        description: 'An FAQ (Frequently Asked Questions) section answers common questions. The <code>&lt;details&gt;</code> tag creates an expandable widget, with <code>&lt;summary&gt;</code> as the visible heading.<br><br>► <strong>What is &lt;details&gt;?</strong> It creates a disclosure widget that users can open and close. The &lt;summary&gt; tag defines the visible heading.<br><br>► <strong>Why use FAQs?</strong> They reduce support questions by answering common issues upfront. They also help with SEO.<br><br>► <strong>Where are they used?</strong> Product pages, help centers, landing pages, service websites.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;FAQ&lt;/h2&gt;</code> and two <code>&lt;details&gt;</code> elements with <code>&lt;summary&gt;</code> and answer text.',
        tip: 'Users can click the summary to expand or collapse each FAQ item — no JavaScript needed!',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <img src="https://picsum.photos/200" alt="Project 1">\n    <img src="https://picsum.photos/200" alt="Project 2">\n    <img src="https://picsum.photos/200" alt="Project 3">\n  </section>\n  <section>\n    <h2>What Our Clients Say</h2>\n    <blockquote>Amazing service! Highly recommended.</blockquote>\n    <p><strong>— Sarah Johnson</strong></p>\n  </section>\n  <section>\n    <h2>Pricing</h2>\n    <div>\n      <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n      <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n      <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n    </div>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<details>') !== -1 && code.indexOf('</details>') !== -1 && code.indexOf('<summary>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>FAQ</h2>') === -1) return 'Add &lt;h2&gt;FAQ&lt;/h2&gt; inside a new section.'; if (code.indexOf('<details>') === -1) return 'Add &lt;details&gt; for each FAQ item.'; if (code.indexOf('<summary>') === -1) return 'Each &lt;details&gt; needs a &lt;summary&gt; for the visible question.'; return 'Add two details elements each with a summary and answer paragraph.'; },
        successMsg: 'Great! Your FAQ section has expandable questions and answers.',
        errorMsg: 'Add a <section> with <h2>FAQ</h2> and two <details> with <summary> and answer text.',
      },
      {
        id: 14,
        title: 'Contact Section — Form Fields',
        description: 'A contact form lets visitors send you messages. The <code>&lt;form&gt;</code> tag wraps input fields, and <code>&lt;label&gt;</code> tags make them accessible.<br><br>▶ <strong>What is &lt;form&gt;?</strong> It groups input fields for submission. It tells the browser these inputs belong together.<br><br>▶ <strong>What is &lt;label&gt;?</strong> It associates text with an input. Clicking the label focuses the input — essential for accessibility.<br><br>▶ <strong>Where are contact forms used?</strong> Contact pages, support pages, newsletter sign-ups — anywhere users send information.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;Contact Us&lt;/h2&gt;</code> and a <code>&lt;form&gt;</code> containing labeled inputs for Name and Email.',
        tip: 'Always wrap inputs in &lt;label&gt; tags for accessibility. Screen readers announce the label text.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <img src="https://picsum.photos/200" alt="Project 1">\n    <img src="https://picsum.photos/200" alt="Project 2">\n    <img src="https://picsum.photos/200" alt="Project 3">\n  </section>\n  <section>\n    <h2>What Our Clients Say</h2>\n    <blockquote>Amazing service! Highly recommended.</blockquote>\n    <p><strong>— Sarah Johnson</strong></p>\n  </section>\n  <section>\n    <h2>Pricing</h2>\n    <div>\n      <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n      <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n      <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n    </div>\n  </section>\n  <section>\n    <h2>FAQ</h2>\n    <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n    <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>Contact Us</h2>') !== -1 && code.indexOf('<form>') !== -1 && code.indexOf('<label>') !== -1; },
        getHint: function (code) { if (code.indexOf('<h2>Contact Us</h2>') === -1) return 'Add &lt;h2&gt;Contact Us&lt;/h2&gt; inside a new section.'; if (code.indexOf('<form>') === -1) return 'Wrap your inputs in &lt;form&gt; tags.'; if (code.indexOf('<label>') === -1) return 'Add &lt;label&gt; tags for each input field.'; return 'Add labeled inputs for Name and Email inside the form.'; },
        successMsg: 'Great! Your contact form has labeled inputs for Name and Email.',
        errorMsg: 'Add a <section> with <h2>Contact Us</h2>, a <form> with Name and Email labeled inputs.',
      },
      {
        id: 15,
        title: 'Contact Section — Textarea & Submit',
        description: 'A <code>&lt;textarea&gt;</code> allows multi-line messages. A <code>&lt;button type="submit"&gt;</code> submits the form data.<br><br>📝 <strong>What is &lt;textarea&gt;?</strong> Unlike single-line &lt;input&gt;, textarea allows multiple lines. It needs a closing &lt;/textarea&gt; tag.<br><br>📝 <strong>What is type="submit"?</strong> It tells the browser this button submits the form. When clicked, it sends the form data to the server.<br><br>📝 <strong>Where are they used?</strong> Contact messages, comments, feedback forms — anywhere users type longer text.',
        task: 'Add a <code>&lt;label&gt;</code> with <code>&lt;textarea&gt;</code> for a message field and a <code>&lt;button type="submit"&gt;Send Message&lt;/button&gt;</code> inside the form.',
        tip: 'The textarea tag is NOT self-closing — always write &lt;/textarea&gt; to close it.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <img src="https://picsum.photos/200" alt="Project 1">\n    <img src="https://picsum.photos/200" alt="Project 2">\n    <img src="https://picsum.photos/200" alt="Project 3">\n  </section>\n  <section>\n    <h2>What Our Clients Say</h2>\n    <blockquote>Amazing service! Highly recommended.</blockquote>\n    <p><strong>— Sarah Johnson</strong></p>\n  </section>\n  <section>\n    <h2>Pricing</h2>\n    <div>\n      <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n      <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n      <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n    </div>\n  </section>\n  <section>\n    <h2>FAQ</h2>\n    <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n    <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n  </section>\n  <section>\n    <h2>Contact Us</h2>\n    <form>\n      <label>Name <input type="text" placeholder="Your name"></label>\n      <label>Email <input type="email" placeholder="Your email"></label>\n    </form>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<textarea') !== -1 && code.indexOf('</textarea>') !== -1 && code.indexOf('<button type="submit"') !== -1; },
        getHint: function (code) { if (code.indexOf('<textarea') === -1) return 'Add a &lt;textarea&gt; for the message field.'; if (code.indexOf('</textarea>') === -1) return 'Close the textarea with &lt;/textarea&gt;.'; if (code.indexOf('<button type="submit"') === -1) return 'Add &lt;button type="submit"&gt;Send Message&lt;/button&gt;.'; return 'Add the message textarea and submit button to your contact form.'; },
        successMsg: 'Excellent! Your contact form is complete with textarea and submit button.',
        errorMsg: 'Add a textarea for the message and a submit button to your contact form.',
      },
      {
        id: 16,
        title: 'Social Links Section',
        description: 'Social media links let users connect with you on other platforms. Adding a dedicated section for social links shows your online presence.<br><br>▶ <strong>What are social links?</strong> Links to your social media profiles (Twitter, Facebook, LinkedIn, etc.). They typically use icons or styled text.<br><br>▶ <strong>Why have social links?</strong> They grow your audience and let users follow you on their preferred platforms.<br><br>▶ <strong>Where are they used?</strong> Footer areas, contact sections, about pages — anywhere users look for more ways to connect.',
        task: 'Add a <code>&lt;section&gt;</code> with <code>&lt;h2&gt;Follow Us&lt;/h2&gt;</code> containing three social media links in a div.',
        tip: 'Social links typically open in a new tab — use target="_blank" for each link.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <img src="https://picsum.photos/200" alt="Project 1">\n    <img src="https://picsum.photos/200" alt="Project 2">\n    <img src="https://picsum.photos/200" alt="Project 3">\n  </section>\n  <section>\n    <h2>What Our Clients Say</h2>\n    <blockquote>Amazing service! Highly recommended.</blockquote>\n    <p><strong>— Sarah Johnson</strong></p>\n  </section>\n  <section>\n    <h2>Pricing</h2>\n    <div>\n      <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n      <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n      <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n    </div>\n  </section>\n  <section>\n    <h2>FAQ</h2>\n    <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n    <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n  </section>\n  <section>\n    <h2>Contact Us</h2>\n    <form>\n      <label>Name <input type="text" placeholder="Your name"></label>\n      <label>Email <input type="email" placeholder="Your email"></label>\n      <label>Message <textarea placeholder="Your message"></textarea></label>\n      <button type="submit">Send Message</button>\n    </form>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<h2>Follow Us</h2>') !== -1 && (code.match(/<a /g) || []).length >= 7; },
        getHint: function (code) { if (code.indexOf('<h2>Follow Us</h2>') === -1) return 'Add &lt;h2&gt;Follow Us&lt;/h2&gt; inside a new section.'; if ((code.match(/<a /g) || []).length < 7) return 'Add three social media links with href attributes and target="_blank".'; return 'Place the links inside a &lt;div&gt; within the section.'; },
        successMsg: 'Great! You added a social links section with three links.',
        errorMsg: 'Add a <section> with <h2>Follow Us</h2> and three social media links.',
      },
      {
        id: 17,
        title: 'Footer with Copyright',
        description: 'The footer appears at the bottom of every webpage. It typically contains copyright information, links, and credits.<br><br>▶ <strong>What is &lt;footer&gt;?</strong> It defines the footer section of a page. It tells browsers and screen readers: "this is the bottom area."<br><br>▶ <strong>Why use footers?</strong> They provide closure to the page and contain important legal information like copyright.<br><br>▶ <strong>Where are footers used?</strong> Every website has one — it is a standard part of web page structure.',
        task: 'Add a <code>&lt;footer&gt;</code> at the end of the body containing <code>&lt;p&gt;&lt;small&gt;&amp;copy; 2026 MyBrand. All rights reserved.&lt;/small&gt;&lt;/p&gt;</code>.',
        tip: 'The &lt;footer&gt; tag is semantic HTML — it describes the purpose of the content to browsers and search engines.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <img src="https://picsum.photos/200" alt="Project 1">\n    <img src="https://picsum.photos/200" alt="Project 2">\n    <img src="https://picsum.photos/200" alt="Project 3">\n  </section>\n  <section>\n    <h2>What Our Clients Say</h2>\n    <blockquote>Amazing service! Highly recommended.</blockquote>\n    <p><strong>— Sarah Johnson</strong></p>\n  </section>\n  <section>\n    <h2>Pricing</h2>\n    <div>\n      <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n      <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n      <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n    </div>\n  </section>\n  <section>\n    <h2>FAQ</h2>\n    <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n    <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n  </section>\n  <section>\n    <h2>Contact Us</h2>\n    <form>\n      <label>Name <input type="text" placeholder="Your name"></label>\n      <label>Email <input type="email" placeholder="Your email"></label>\n      <label>Message <textarea placeholder="Your message"></textarea></label>\n      <button type="submit">Send Message</button>\n    </form>\n  </section>\n  <section>\n    <h2>Follow Us</h2>\n    <div>\n      <a href="https://twitter.com" target="_blank">Twitter</a>\n      <a href="https://facebook.com" target="_blank">Facebook</a>\n      <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n    </div>\n  </section>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('<footer>') !== -1 && code.indexOf('</footer>') !== -1 && code.indexOf('&copy; 2026 MyBrand') !== -1; },
        getHint: function (code) { if (code.indexOf('<footer>') === -1) return 'Start with &lt;footer&gt; at the end of the body.'; if (code.indexOf('</footer>') === -1) return 'Close your footer with &lt;/footer&gt;.'; if (code.indexOf('&copy; 2026 MyBrand') === -1) return 'Add copyright text using &amp;copy; inside &lt;small&gt;.'; return 'Your footer should contain a small paragraph with copyright.'; },
        successMsg: 'Perfect! Your page now has a footer with copyright at the bottom.',
        errorMsg: 'Add a <footer> at the end with copyright information.',
      },
      {
        id: 18,
        title: 'Organize with Container Divs',
        description: 'Wrapping sections in container divs organizes the page layout. This is essential for applying CSS styles and creating responsive designs.<br><br>📦 <strong>What are container divs?</strong> They wrap groups of content to control layout. Each major section gets its own container.<br><br>📦 <strong>Why organize with divs?</strong> CSS layouts (flexbox, grid) need parent containers. Organizing now prepares your page for styling.<br><br>📦 <strong>Where is this used?</strong> Every modern website uses container divs to structure content for responsive design.',
        task: 'Wrap each major <code>&lt;section&gt;</code> in a <code>&lt;div class="container"&gt;</code> to prepare for responsive styling.',
        tip: 'Container divs are the foundation of CSS layouts — they let you control max-width, padding, and alignment.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <hr>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div>\n        <h3>Web Design</h3>\n        <p>Beautiful and responsive designs.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Development</h3>\n        <p>Clean and efficient code.</p>\n        <button>Learn More</button>\n      </div>\n      <div>\n        <h3>Support</h3>\n        <p>24/7 customer support.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 1">\n        <p><strong>Jane Doe</strong></p>\n        <p>CEO & Founder</p>\n      </div>\n      <div>\n        <img src="https://picsum.photos/150" alt="Team member 2">\n        <p><strong>John Smith</strong></p>\n        <p>Lead Developer</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <img src="https://picsum.photos/200" alt="Project 1">\n    <img src="https://picsum.photos/200" alt="Project 2">\n    <img src="https://picsum.photos/200" alt="Project 3">\n  </section>\n  <section>\n    <h2>What Our Clients Say</h2>\n    <blockquote>Amazing service! Highly recommended.</blockquote>\n    <p><strong>— Sarah Johnson</strong></p>\n  </section>\n  <section>\n    <h2>Pricing</h2>\n    <div>\n      <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n      <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n      <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n    </div>\n  </section>\n  <section>\n    <h2>FAQ</h2>\n    <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n    <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n  </section>\n  <section>\n    <h2>Contact Us</h2>\n    <form>\n      <label>Name <input type="text" placeholder="Your name"></label>\n      <label>Email <input type="email" placeholder="Your email"></label>\n      <label>Message <textarea placeholder="Your message"></textarea></label>\n      <button type="submit">Send Message</button>\n    </form>\n  </section>\n  <section>\n    <h2>Follow Us</h2>\n    <div>\n      <a href="https://twitter.com" target="_blank">Twitter</a>\n      <a href="https://facebook.com" target="_blank">Facebook</a>\n      <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n    </div>\n  </section>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return (code.match(/<div class="container">/g) || []).length >= 3; },
        getHint: function (code) { if ((code.match(/<div class="container">/g) || []).length < 3) return 'Wrap at least 3 sections in &lt;div class="container"&gt;...&lt;/div&gt;.'; return 'Each container div should wrap a complete section with its heading and content.'; },
        successMsg: 'Great! Your page sections are organized in container divs for future CSS styling.',
        errorMsg: 'Wrap each major section in a <div class="container">...</div>.',
      },
      {
        id: 19,
        title: 'Semantic Structure Review',
        description: 'Semantic HTML uses meaningful tags that describe their purpose. Reviewing your structure ensures your page is accessible and SEO-friendly.<br><br>▶ <strong>What are semantic tags?</strong> Tags like &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt; that describe their content\'s role.<br><br>▶ <strong>Why care about semantics?</strong> Search engines rank semantic pages higher. Screen readers navigate them better. Your code is cleaner.<br><br>▶ <strong>Where is this important?</strong> Every public website benefits from semantic HTML.',
        task: 'Ensure each section has a proper semantic tag. Add an <code>&lt;hr&gt;</code> between each major section to visually separate them.',
        tip: 'Every &lt;section&gt; should have a heading. Check that your sections are in logical order.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return (code.match(/<hr>/g) || []).length >= 3; },
        getHint: function (code) { if ((code.match(/<hr>/g) || []).length < 3) return 'Add &lt;hr&gt; between sections to create visual separation.'; return 'Make sure each section has a proper heading tag.'; },
        successMsg: 'Excellent! Your page has proper semantic structure with visual separators.',
        errorMsg: 'Add hr tags between sections and ensure proper semantic structure.',
      },
      {
        id: 20,
        title: 'Accessibility Review',
        description: 'Accessibility ensures your website works for everyone, including people using screen readers or keyboard navigation.<br><br>► <strong>Why accessibility?</strong> 15% of the world\'s population has some form of disability. Accessible websites are also ranked higher by search engines.<br><br>► <strong>What to check?</strong> Alt text on images, labels on form fields, proper heading hierarchy, semantic tags.<br><br>► <strong>Where is it required?</strong> Government websites, educational sites, and increasingly all public websites must be accessible.',
        task: 'Add placeholder attributes to all form inputs and ensure every image has a descriptive alt attribute. Add a <code>lang="en"</code> attribute to the html tag if missing.',
        tip: 'Good accessibility starts with simple practices: alt texts, labels, proper headings, and semantic HTML.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return code.indexOf('lang="en"') !== -1 && (code.match(/alt="/g) || []).length >= 5; },
        getHint: function (code) { if (code.indexOf('lang="en"') === -1) return 'Add lang="en" to the &lt;html&gt; tag.'; if ((code.match(/alt="/g) || []).length < 5) return 'Every image needs a descriptive alt attribute.'; return 'Check that all form inputs have labels and placeholders.'; },
        successMsg: 'Excellent! Your page follows accessibility best practices.',
        errorMsg: 'Add lang="en" to html tag and ensure all images have alt text.',
      },
      {
        id: 21,
        title: 'Refine Hero Section',
        description: 'Refining the hero section makes a stronger first impression. A compelling headline and clear call-to-action are crucial for engaging visitors.<br><br>▶ <strong>Why refine?</strong> Small tweaks to the hero heading, description, and button text can significantly improve user engagement.<br><br>▶ <strong>What to check?</strong> The heading should be bold, the description concise, and the button text action-oriented.<br><br>▶ <strong>Where is this done?</strong> Every landing page hero goes through multiple rounds of refinement.',
        task: 'Continue refining your landing page by reviewing the current code and ensuring all sections are complete.',
        tip: 'Regular refinement makes the difference between a good page and a great page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return code.indexOf("container") !== -1 && code.indexOf("section") !== -1; },
        getHint: function (code) { if (code.indexOf("container") === -1) return "Make sure you have container divs wrapping sections."; return "Review your page structure and ensure all sections are complete."; },
        successMsg: 'Great work! Keep refining your landing page.',
        errorMsg: 'Continue refining your landing page sections.',
      },
      {
        id: 22,
        title: 'Consolidate Card Styles',
        description: 'Consistent card styling across services, team, and pricing creates a professional look. Each card should have the same structure.<br><br>▶ <strong>Why consistency?</strong> Users scan pages quickly. Consistent card patterns help them find and compare information easily.<br><br>▶ <strong>What to check?</strong> Each card has a heading, description/price, and button. The spacing and structure should match across sections.<br><br>▶ <strong>Where is this applied?</strong> Services, team, pricing, features — any section using card layouts.',
        task: 'Continue refining your landing page by reviewing the current code and ensuring all sections are complete.',
        tip: 'Regular refinement makes the difference between a good page and a great page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return code.indexOf("container") !== -1 && code.indexOf("section") !== -1; },
        getHint: function (code) { if (code.indexOf("container") === -1) return "Make sure you have container divs wrapping sections."; return "Review your page structure and ensure all sections are complete."; },
        successMsg: 'Great work! Keep refining your landing page.',
        errorMsg: 'Continue refining your landing page sections.',
      },
      {
        id: 23,
        title: 'Add Page Structure Dividers',
        description: 'Using horizontal rules between sections improves readability and creates clear visual separation.<br><br>▶ <strong>Why add dividers?</strong> They create visual breathing room between sections, making the page easier to scan.<br><br>▶ <strong>Where to place them?</strong> Between each major section — after hero, after about, after services, after team, etc.<br><br>▶ <strong>Where is this used?</strong> Content-heavy pages, landing pages, articles — anywhere you need clear visual separation.',
        task: 'Continue refining your landing page by reviewing the current code and ensuring all sections are complete.',
        tip: 'Regular refinement makes the difference between a good page and a great page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return code.indexOf("container") !== -1 && code.indexOf("section") !== -1; },
        getHint: function (code) { if (code.indexOf("container") === -1) return "Make sure you have container divs wrapping sections."; return "Review your page structure and ensure all sections are complete."; },
        successMsg: 'Great work! Keep refining your landing page.',
        errorMsg: 'Continue refining your landing page sections.',
      },
      {
        id: 24,
        title: 'Refine Contact Form',
        description: 'Refining the contact form improves user experience. Placeholder text guides users, and proper input types enable mobile-friendly keyboards.<br><br>► <strong>Why refine forms?</strong> Small improvements like placeholders, proper types (email, tel), and clear labels dramatically improve form completion rates.<br><br>► <strong>What to add?</strong> Placeholders for all fields, proper input types, and a clear submit button.<br><br>► <strong>Where is this done?</strong> Contact forms, sign-up forms, newsletter subscriptions — any user-facing form.',
        task: 'Continue refining your landing page by reviewing the current code and ensuring all sections are complete.',
        tip: 'Regular refinement makes the difference between a good page and a great page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return code.indexOf("container") !== -1 && code.indexOf("section") !== -1; },
        getHint: function (code) { if (code.indexOf("container") === -1) return "Make sure you have container divs wrapping sections."; return "Review your page structure and ensure all sections are complete."; },
        successMsg: 'Great work! Keep refining your landing page.',
        errorMsg: 'Continue refining your landing page sections.',
      },
      {
        id: 25,
        title: 'Polish Text Content',
        description: 'Polishing text content throughout the page creates a professional, trustworthy impression. Review all headings and descriptions.<br><br>📝 <strong>Why polish text?</strong> Typos, inconsistent capitalization, and unclear messaging undermine credibility. Professional copy builds trust.<br><br>📝 <strong>What to check?</strong> Consistent heading styles, clear descriptions, proper capitalization, no spelling errors.<br><br>📝 <strong>Where is this done?</strong> Every text element — headings, paragraphs, button labels, link text.',
        task: 'Continue refining your landing page by reviewing the current code and ensuring all sections are complete.',
        tip: 'Regular refinement makes the difference between a good page and a great page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return code.indexOf("container") !== -1 && code.indexOf("section") !== -1; },
        getHint: function (code) { if (code.indexOf("container") === -1) return "Make sure you have container divs wrapping sections."; return "Review your page structure and ensure all sections are complete."; },
        successMsg: 'Great work! Keep refining your landing page.',
        errorMsg: 'Continue refining your landing page sections.',
      },
      {
        id: 26,
        title: 'Final Code Organization',
        description: 'Final code organization ensures your HTML is clean, well-indented, and follows best practices. This makes future maintenance easier.<br><br>📋 <strong>Why organize code?</strong> Clean code is easier to read, debug, and modify. Other developers (or future you) will thank you.<br><br>📋 <strong>What to check?</strong> Proper indentation, consistent spacing, no unused or duplicate tags, all tags properly closed.<br><br>📋 <strong>Where is this done?</strong> Throughout the entire HTML file — every section, tag, and attribute.',
        task: 'Continue refining your landing page by reviewing the current code and ensuring all sections are complete.',
        tip: 'Regular refinement makes the difference between a good page and a great page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function (code) { return code.indexOf("container") !== -1 && code.indexOf("section") !== -1; },
        getHint: function (code) { if (code.indexOf("container") === -1) return "Make sure you have container divs wrapping sections."; return "Review your page structure and ensure all sections are complete."; },
        successMsg: 'Great work! Keep refining your landing page.',
        errorMsg: 'Continue refining your landing page sections.',
      },
      {
        id: 27,
        title: '🎉 Ready to Publish',
        description: 'Congratulations! You have built a complete professional landing page. This step marks the completion of all sections and prepares you for the final showcase.<br><br>🎉 <strong>What you built:</strong> A complete landing page with header, nav, hero, about, services, team, gallery, testimonials, pricing, FAQ, contact form, social links, and footer.<br><br>🎉 <strong>Why this matters:</strong> This is the standard structure used by thousands of professional websites. You now know how to build any landing page.<br><br>🎉 <strong>What\'s next:</strong> CSS will make your page look amazing with colors, fonts, and responsive layouts.',
        task: 'Your complete landing page is ready. All sections are built and validated. Click Run to prepare for the final showcase.',
        tip: 'You have built every section of a professional landing page. Great work!',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <div class="container">\n    <section>\n      <h1>Welcome to Our Site</h1>\n      <p>We build amazing web experiences.</p>\n      <button>Get Started</button>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>About Us</h2>\n      <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n      <hr>\n      <p><small>Established 2026</small></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Services</h2>\n      <div>\n        <div>\n          <h3>Web Design</h3>\n          <p>Beautiful and responsive designs.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Development</h3>\n          <p>Clean and efficient code.</p>\n          <button>Learn More</button>\n        </div>\n        <div>\n          <h3>Support</h3>\n          <p>24/7 customer support.</p>\n          <button>Learn More</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Our Team</h2>\n      <div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 1">\n          <p><strong>Jane Doe</strong></p>\n          <p>CEO & Founder</p>\n        </div>\n        <div>\n          <img src="https://picsum.photos/150" alt="Team member 2">\n          <p><strong>John Smith</strong></p>\n          <p>Lead Developer</p>\n        </div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Gallery</h2>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>What Our Clients Say</h2>\n      <blockquote>Amazing service! Highly recommended.</blockquote>\n      <p><strong>— Sarah Johnson</strong></p>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Pricing</h2>\n      <div>\n        <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n        <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n        <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n      </div>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>FAQ</h2>\n      <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n      <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Contact Us</h2>\n      <form>\n        <label>Name <input type="text" placeholder="Your name"></label>\n        <label>Email <input type="email" placeholder="Your email"></label>\n        <label>Message <textarea placeholder="Your message"></textarea></label>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </div>\n  <hr>\n  <div class="container">\n    <section>\n      <h2>Follow Us</h2>\n      <div>\n        <a href="https://twitter.com" target="_blank">Twitter</a>\n        <a href="https://facebook.com" target="_blank">Facebook</a>\n        <a href="https://linkedin.com" target="_blank">LinkedIn</a>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function () { return true; },
        getHint: function () { return "Your page is ready for the final showcase!"; },
        successMsg: '🎉 Your landing page is complete and ready for the final showcase!',
        errorMsg: '',
      },
      {
        id: 28,
        title: '🎉 Final Showcase — Complete Landing Page',
        description: 'Congratulations! 🎉 You have built a complete, professional landing page from scratch. This final version showcases everything you learned — semantic HTML, navigation, hero sections, service cards, team profiles, galleries, testimonials, pricing tables, FAQs, contact forms, social links, and footers.<br><br>🏆 <strong>What you built:</strong> A full-featured landing page with 12+ sections using proper semantic HTML structure.<br><br>🏆 <strong>Skills mastered:</strong> Headings, paragraphs, lists, links, images, forms, tables, semantic elements, accessibility, and code organization.<br><br>🏆 <strong>What\'s next:</strong> CSS styling will bring your pages to life with colors, fonts, animations, and responsive layouts.',
        task: 'Review your complete professional landing page below. Every section is built and ready. Click Run to see your final masterpiece!',
        tip: 'You now have the HTML skills to build any website structure. Adding CSS will make it visually stunning.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Landing Page</title>\n</head>\n<body>\n  <header>\n    <h1>MyBrand</h1>\n    <p>Your trusted partner</p>\n  </header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h1>Welcome to Our Site</h1>\n    <p>We build amazing web experiences.</p>\n    <button>Get Started</button>\n  </section>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a team of <strong>creative developers</strong> passionate about <em>web technology</em>.</p>\n    <hr>\n    <p><small>Established 2026</small></p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <div>\n      <div><h3>Web Design</h3><p>Beautiful and responsive designs.</p><button>Learn More</button></div>\n      <div><h3>Development</h3><p>Clean and efficient code.</p><button>Learn More</button></div>\n      <div><h3>Support</h3><p>24/7 customer support.</p><button>Learn More</button></div>\n    </div>\n  </section>\n  <section>\n    <h2>Our Team</h2>\n    <div>\n      <div><img src="https://picsum.photos/150" alt="Team member 1"><p><strong>Jane Doe</strong></p><p>CEO & Founder</p></div>\n      <div><img src="https://picsum.photos/150" alt="Team member 2"><p><strong>John Smith</strong></p><p>Lead Developer</p></div>\n    </div>\n  </section>\n  <section>\n    <h2>Gallery</h2>\n    <div>\n      <img src="https://picsum.photos/200" alt="Project 1">\n      <img src="https://picsum.photos/200" alt="Project 2">\n      <img src="https://picsum.photos/200" alt="Project 3">\n    </div>\n  </section>\n  <section>\n    <h2>What Our Clients Say</h2>\n    <blockquote>Amazing service! Highly recommended.</blockquote>\n    <p><strong>— Sarah Johnson</strong></p>\n  </section>\n  <section>\n    <h2>Pricing</h2>\n    <div>\n      <div><h3>Basic</h3><p>$10/month</p><button>Choose</button></div>\n      <div><h3>Pro</h3><p>$20/month</p><button>Choose</button></div>\n      <div><h3>Enterprise</h3><p>$50/month</p><button>Choose</button></div>\n    </div>\n  </section>\n  <section>\n    <h2>FAQ</h2>\n    <details><summary>What services do you offer?</summary><p>Web design, development, and support.</p></details>\n    <details><summary>What is your turnaround time?</summary><p>Most projects are completed within 2 weeks.</p></details>\n  </section>\n  <section>\n    <h2>Contact Us</h2>\n    <form>\n      <label>Name <input type="text" placeholder="Your name"></label>\n      <label>Email <input type="email" placeholder="Your email"></label>\n      <label>Message <textarea placeholder="Your message"></textarea></label>\n      <button type="submit">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p><small>&copy; 2026 MyBrand. All rights reserved.</small></p>\n  </footer>\n</body>\n</html>',
        validate: function () { return true; },
        getHint: function () { return "Your complete landing page is ready! Every section is built."; },
        successMsg: '🎉 Outstanding! You completed Level 3 and built a complete professional landing page!',
        errorMsg: '',
      }

    ],

    /* ===== LEVEL 4: MINI PROJECTS — BUILDING REAL MINI WEBSITES (50 steps) ===== */
    4: [

      /* ===== PROJECT 1: PERSONAL PROFILE CARD (Steps 1—12) ===== */

      {
        id: 1,
        title: 'Start Your Profile Card Project',
        description: 'Welcome to <strong>Mini Projects</strong>! You will build 4 real mini websites from scratch. Let\'s start with a <strong>Personal Profile Card</strong>.<br><br>▶ <strong>What is a Profile Card?</strong> A compact card that displays a person\'s photo, name, bio, and links — one of the most common web patterns.<br><br>▶ <strong>Why build this?</strong> Profile cards teach you to organize content inside containers — a skill used in every modern website.<br><br>▶ <strong>Where are they used?</strong> Team pages, user profiles, social media, portfolios, and online business cards.',
        task: 'Create the basic HTML structure: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code> with <code>&lt;title&gt;My Profile Card&lt;/title&gt;</code>, and <code>&lt;body&gt;</code>.',
        tip: 'Every project starts with the same foundation — DOCTYPE, html, head, and body. This never changes.',
        startingCode: '',
        validate: function (code) {
          return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html lang="en">') !== -1 && code.indexOf('<head>') !== -1 && code.indexOf('<title>My Profile Card</title>') !== -1 && code.indexOf('<body>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt; at the very top.';
          if (code.indexOf('<html lang="en">') === -1) return 'Add &lt;html lang="en"&gt; after the DOCTYPE.';
          if (code.indexOf('<title>My Profile Card</title>') === -1) return 'Set the title to "My Profile Card" inside &lt;head&gt;.';
          if (code.indexOf('<body>') === -1) return 'Add &lt;body&gt; and &lt;/body&gt; after &lt;/head&gt;.';
          return 'Make sure you have DOCTYPE, html, head with title "My Profile Card", and body tags.';
        },
        successMsg: 'Perfect! Your Profile Card project foundation is ready. Let\'s build the content next!',
        errorMsg: 'Create the basic HTML structure with the title "My Profile Card".',
      },
      {
        id: 2,
        title: 'Add Meta Tags to Profile Card',
        description: 'Meta tags provide <strong>essential settings</strong> for your webpage. The <code>&lt;meta charset="UTF-8"&gt;</code> ensures text displays correctly, and the viewport meta makes it mobile-friendly.<br><br>▶ <strong>What is charset?</strong> It sets character encoding so special characters and emoji display properly.<br><br>▶ <strong>What is viewport?</strong> It tells mobile browsers to scale your page correctly. Without it, text appears tiny on phones.<br><br>▶ <strong>Where are these used?</strong> Every single modern website includes both meta tags inside &lt;head&gt;.',
        task: 'Inside <code>&lt;head&gt;</code>, add <code>&lt;meta charset="UTF-8"&gt;</code> on the first line, then <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> on the next line.',
        tip: 'Always put charset before other elements inside &lt;head&gt;. The viewport meta is essential for responsive design.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>My Profile Card</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<meta charset="UTF-8">') !== -1 && code.indexOf('<meta name="viewport" content="width=device-width, initial-scale=1.0">') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<meta charset="UTF-8">') === -1) return 'Add &lt;meta charset="UTF-8"&gt; in the head section.';
          if (code.indexOf('name="viewport"') === -1) return 'Add the viewport meta tag: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;';
          return 'Your head should have both meta tags — charset and viewport.';
        },
        successMsg: 'Great! Your page now has proper meta tags for encoding and responsive design.',
        errorMsg: 'Add charset and viewport meta tags inside the head section.',
      },
      {
        id: 3,
        title: 'Create the Profile Card Container',
        description: 'A <code>&lt;div&gt;</code> is a <strong>container</strong> that groups related content. For our profile card, we wrap everything in a div to organize the layout.<br><br>📦 <strong>What is &lt;div&gt;?</strong> A block-level container that groups elements. It takes full width and creates a new line before and after.<br><br>📦 <strong>Why use a container?</strong> It keeps all profile card elements together. With CSS, you can style the whole card at once.<br><br>📦 <strong>Where is this used?</strong> Every card, section, and layout on the web uses div containers to organize content.',
        task: 'Inside <code>&lt;body&gt;</code>, add a <code>&lt;div&gt;</code> container. Put <code>&lt;div&gt;</code> right after <code>&lt;body&gt;</code> and <code>&lt;/div&gt;</code> right before <code>&lt;/body&gt;</code>.',
        tip: 'Think of divs as boxes that hold your content. All modern websites nest divs inside divs to build layouts.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) {
          var bo = code.indexOf('<body>'); var bc = code.indexOf('</body>');
          if (bo === -1 || bc === -1) return false;
          var c = code.substring(bo + 6, bc).trim();
          return c.startsWith('<div>') && c.endsWith('</div>');
        },
        getHint: function (code) {
          if (code.indexOf('<div>') === -1) return 'Add &lt;div&gt; right after &lt;body&gt;.';
          if (code.indexOf('</div>') === -1) return 'Add &lt;/div&gt; right before &lt;/body&gt;.';
          var bo = code.indexOf('<body>'); var bc = code.indexOf('</body>');
          var c = code.substring(bo + 6, bc).trim();
          if (!c.startsWith('<div>')) return 'Put &lt;div&gt; at the very start, right after &lt;body&gt;.';
          if (!c.endsWith('</div>')) return 'Put &lt;/div&gt; at the very end, right before &lt;/body&gt;.';
          return 'Make sure the div wraps everything inside the body.';
        },
        successMsg: 'Excellent! Your profile card content will live inside this div container.',
        errorMsg: 'Add <div> at the start and </div> at the end inside the body.',
      },
      {
        id: 4,
        title: 'Add Profile Image',
        description: 'The <code>&lt;img&gt;</code> tag adds a <strong>profile picture</strong>. The <code>src</code> attribute points to the image URL, and <code>alt</code> provides text for screen readers.<br><br>🖼️ <strong>What is &lt;img&gt;?</strong> It embeds an image. It is self-closing — no &lt;/img&gt; needed.<br><br>🖼️ <strong>Why use alt text?</strong> Screen readers describe alt text to visually impaired users. If the image fails to load, alt text appears instead.<br><br>🖼️ <strong>Where are profile images used?</strong> Social media profiles, team directories, user comments, testimonials — anywhere a person is featured.',
        task: 'Inside the <code>&lt;div&gt;</code>, add <code>&lt;img src="https://picsum.photos/seed/profile/120" alt="Profile photo"&gt;</code>.',
        tip: 'The src can be a URL or a local file path. We use a placeholder image service with a seed for consistent results.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    \n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('src="https://picsum.photos/seed/profile/120"') !== -1 && code.indexOf('alt="Profile photo"') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<img') === -1) return 'Add an &lt;img&gt; tag inside the div.';
          if (code.indexOf('src=') === -1) return 'Your &lt;img&gt; needs a src attribute with the image URL.';
          if (code.indexOf('alt=') === -1) return 'Add alt="Profile photo" for accessibility.';
          return 'Write: &lt;img src="https://picsum.photos/seed/profile/120" alt="Profile photo"&gt;';
        },
        successMsg: 'Great! Your profile card now has a profile picture. The preview is starting to take shape!',
        errorMsg: 'Add <img src="https://picsum.photos/seed/profile/120" alt="Profile photo"> inside the div.',
      },
      {
        id: 5,
        title: 'Add Username Heading',
        description: 'The <code>&lt;h1&gt;</code> tag creates the <strong>main heading</strong> — in this case, the person\'s name. It is the most important text on the card.<br><br>► <strong>What is &lt;h1&gt;?</strong> The highest-level heading. It describes the main topic of the page or section.<br><br>► <strong>Why use h1 for a name?</strong> On a profile card, the name IS the main topic. Using h1 is semantically correct.<br><br>► <strong>Where is this used?</strong> Profile cards, author bios, team pages — the name is always the primary heading.',
        task: 'After the <code>&lt;img&gt;</code> tag, add <code>&lt;h1&gt;Alex Johnson&lt;/h1&gt;</code>.',
        tip: 'Every page should have exactly one &lt;h1&gt;. On this profile card, the person\'s name serves as the main heading.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h1>Alex Johnson</h1>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h1>') === -1) return 'Add an &lt;h1&gt; tag for the name: &lt;h1&gt;Alex Johnson&lt;/h1&gt;';
          if (code.indexOf('Alex Johnson') === -1) return 'The name should be "Alex Johnson" inside the &lt;h1&gt; tags.';
          if (code.indexOf('</h1>') === -1) return 'Close your &lt;h1&gt; tag with &lt;/h1&gt;.';
          return 'Write exactly: &lt;h1&gt;Alex Johnson&lt;/h1&gt; after the image.';
        },
        successMsg: 'Awesome! "Alex Johnson" now appears as the main heading on the profile card.',
        errorMsg: 'Add <h1>Alex Johnson</h1> after the image inside the div.',
      },
      {
        id: 6,
        title: 'Add Bio Paragraph with Emphasis',
        description: 'The <code>&lt;p&gt;</code> tag creates a <strong>paragraph</strong> for the biography. Use <code>&lt;strong&gt;</code> for bold importance and <code>&lt;em&gt;</code> for italic emphasis.<br><br>📝 <strong>What is &lt;p&gt;?</strong> It defines a paragraph. Browsers add space before and after for readability.<br><br>📝 <strong>Why use strong/em?</strong> They add semantic meaning — strong indicates importance, em indicates emphasis. Screen readers announce them differently.<br><br>📝 <strong>Where is this used?</strong> About sections, team bios, user profiles — anywhere text needs hierarchy and emphasis.',
        task: 'After the <code>&lt;h1&gt;</code>, add <code>&lt;p&gt;&lt;strong&gt;Web Developer&lt;/strong&gt; &amp; &lt;em&gt;Problem Solver&lt;/em&gt;. Building the web, one tag at a time.&lt;/p&gt;</code>.',
        tip: 'Use &lt;strong&gt; instead of &lt;b&gt; and &lt;em&gt; instead of &lt;i&gt; for better accessibility and semantic HTML.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n    <h1>Alex Johnson</h1>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<strong>Web Developer</strong>') !== -1 && code.indexOf('<em>Problem Solver</em>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<p>') === -1) return 'Add a &lt;p&gt; tag for the bio.';
          if (code.indexOf('<strong>Web Developer</strong>') === -1) return 'Wrap "Web Developer" in &lt;strong&gt; tags.';
          if (code.indexOf('<em>Problem Solver</em>') === -1) return 'Wrap "Problem Solver" in &lt;em&gt; tags.';
          if (code.indexOf('&amp;') === -1) return 'Use &amp;amp; for the ampersand between the two phrases.';
          return 'Your bio should have &lt;strong&gt;Web Developer&lt;/strong&gt; &amp;amp; &lt;em&gt;Problem Solver&lt;/em&gt;.';
        },
        successMsg: 'Perfect! Your bio uses strong and em tags for professional emphasis.',
        errorMsg: 'Add a paragraph with <strong>Web Developer</strong> and <em>Problem Solver</em>.',
      },
      {
        id: 7,
        title: 'Add Role Badges',
        description: 'The <code>&lt;span&gt;</code> tag is an <strong>inline container</strong> for small text fragments. Badges are small labels that highlight skills or roles.<br><br>▶ <strong>What is &lt;span&gt;?</strong> An inline element that wraps text without breaking the line. Unlike &lt;div&gt;, it stays on the same line.<br><br>▶ <strong>Why use span badges?</strong> They group small text for styling. Developers use spans to color-code labels, tags, and badges.<br><br>▶ <strong>Where are badges used?</strong> Skill tags, role labels, status indicators, category markers — everywhere on modern websites.',
        task: 'After the paragraph, add three badges using <code>&lt;span&gt;</code>: <code>&lt;span&gt;HTML&lt;/span&gt;</code>, <code>&lt;span&gt;CSS&lt;/span&gt;</code>, and <code>&lt;span&gt;JS&lt;/span&gt;</code>.',
        tip: 'Span is inline — it stays on the same line. Unlike div, it does not create a new line before or after.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n    <h1>Alex Johnson</h1>\n    <p><strong>Web Developer</strong> & <em>Problem Solver</em>. Building the web, one tag at a time.</p>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<span>HTML</span>') !== -1 && code.indexOf('<span>CSS</span>') !== -1 && code.indexOf('<span>JS</span>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<span>HTML</span>') === -1) return 'Add &lt;span&gt;HTML&lt;/span&gt; as the first badge.';
          if (code.indexOf('<span>CSS</span>') === -1) return 'Add &lt;span&gt;CSS&lt;/span&gt; as the second badge.';
          if (code.indexOf('<span>JS</span>') === -1) return 'Add &lt;span&gt;JS&lt;/span&gt; as the third badge.';
          return 'Your badges should be: &lt;span&gt;HTML&lt;/span&gt; &lt;span&gt;CSS&lt;/span&gt; &lt;span&gt;JS&lt;/span&gt;';
        },
        successMsg: 'Great! Your profile card now has skill badges that highlight expertise areas.',
        errorMsg: 'Add three span badges after the paragraph: HTML, CSS, and JS.',
      },
      {
        id: 8,
        title: 'Add Action Buttons',
        description: 'Buttons let users <strong>take action</strong>. The <code>&lt;button&gt;</code> tag creates clickable elements. We will add a primary and a secondary button.<br><br>🔘 <strong>What is &lt;button&gt;?</strong> A clickable element that triggers an action when clicked. The text between tags becomes the label.<br><br>🔘 <strong>Why multiple buttons?</strong> Different buttons serve different purposes — "Follow" for social connection, "Contact" for direct messaging.<br><br>🔘 <strong>Where are buttons used?</strong> Forms, calls-to-action, profiles, cards — everywhere users need to interact.',
        task: 'After the badges, add two buttons: <code>&lt;button&gt;Follow&lt;/button&gt;</code> and <code>&lt;button&gt;Contact&lt;/button&gt;</code>.',
        tip: 'Buttons without JavaScript do nothing when clicked yet. Their purpose becomes clear when you learn CSS and JS later.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n    <h1>Alex Johnson</h1>\n    <p><strong>Web Developer</strong> & <em>Problem Solver</em>. Building the web, one tag at a time.</p>\n    <span>HTML</span>\n    <span>CSS</span>\n    <span>JS</span>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<button>Follow</button>') !== -1 && code.indexOf('<button>Contact</button>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<button>Follow</button>') === -1) return 'Add &lt;button&gt;Follow&lt;/button&gt; as the first button.';
          if (code.indexOf('<button>Contact</button>') === -1) return 'Add &lt;button&gt;Contact&lt;/button&gt; as the second button.';
          return 'You need two buttons: Follow and Contact.';
        },
        successMsg: 'Awesome! Your profile card now has two action buttons for users to interact with.',
        errorMsg: 'Add <button>Follow</button> and <button>Contact</button> after the badges.',
      },
      {
        id: 9,
        title: 'Add Social Links',
        description: 'The <code>&lt;a&gt;</code> tag creates <strong>clickable links</strong> to other pages or websites. Social links let visitors connect on other platforms.<br><br>🔗 <strong>What is &lt;a&gt;?</strong> The anchor tag creates a hyperlink. The <code>href</code> attribute specifies the destination URL.<br><br>🔗 <strong>Why social links?</strong> They connect your profile to Twitter, GitHub, LinkedIn. This is a standard feature of profile cards.<br><br>🔗 <strong>Where are they used?</strong> Team pages, portfolios, author bios, contact sections — anywhere you want people to connect.',
        task: 'After the buttons, add three links: <code>&lt;a href="#"&gt;Twitter&lt;/a&gt;</code>, <code>&lt;a href="#"&gt;GitHub&lt;/a&gt;</code>, <code>&lt;a href="#"&gt;LinkedIn&lt;/a&gt;</code>. Use <code>#</code> as placeholder.',
        tip: 'Using # as href creates a link to nowhere — perfect for placeholder links during development.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n    <h1>Alex Johnson</h1>\n    <p><strong>Web Developer</strong> & <em>Problem Solver</em>. Building the web, one tag at a time.</p>\n    <span>HTML</span>\n    <span>CSS</span>\n    <span>JS</span>\n    <button>Follow</button>\n    <button>Contact</button>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<a href="#">Twitter</a>') !== -1 && code.indexOf('<a href="#">GitHub</a>') !== -1 && code.indexOf('<a href="#">LinkedIn</a>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<a href="#">Twitter</a>') === -1) return 'Add &lt;a href="#"&gt;Twitter&lt;/a&gt; as the first link.';
          if (code.indexOf('<a href="#">GitHub</a>') === -1) return 'Add &lt;a href="#"&gt;GitHub&lt;/a&gt; as the second link.';
          if (code.indexOf('<a href="#">LinkedIn</a>') === -1) return 'Add &lt;a href="#"&gt;LinkedIn&lt;/a&gt; as the third link.';
          return 'You need three social links: Twitter, GitHub, and LinkedIn.';
        },
        successMsg: 'Excellent! Your profile card now has social links for visitors to connect on multiple platforms.',
        errorMsg: 'Add Twitter, GitHub, and LinkedIn links with href="#".',
      },
      {
        id: 10,
        title: 'Add Stats Section',
        description: 'A <strong>stats section</strong> shows numbers that demonstrate credibility — like followers, projects, and years of experience.<br><br>▶ <strong>What are stats?</strong> Key metrics displayed prominently. They give visitors quick credibility signals.<br><br>▶ <strong>Why display stats?</strong> Numbers build trust. "1,234 followers" tells visitors you are established in your field.<br><br>▶ <strong>Where are stats used?</strong> Profile pages, portfolios, landing pages, social media — anywhere credibility matters.',
        task: 'After the links, add a stats container: <code>&lt;div&gt;&lt;span&gt;1.2K Followers&lt;/span&gt;&lt;span&gt;50+ Projects&lt;/span&gt;&lt;span&gt;5 Years&lt;/span&gt;&lt;/div&gt;</code>. Group all three spans inside one div.',
        tip: 'Think of the stats div as a row of metrics. Each span holds one stat with a number and label.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n    <h1>Alex Johnson</h1>\n    <p><strong>Web Developer</strong> & <em>Problem Solver</em>. Building the web, one tag at a time.</p>\n    <span>HTML</span>\n    <span>CSS</span>\n    <span>JS</span>\n    <button>Follow</button>\n    <button>Contact</button>\n    <a href="#">Twitter</a>\n    <a href="#">GitHub</a>\n    <a href="#">LinkedIn</a>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('1.2K Followers') !== -1 && code.indexOf('50+ Projects') !== -1 && code.indexOf('5 Years') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('1.2K Followers') === -1) return 'Add a span with "1.2K Followers" as the first stat.';
          if (code.indexOf('50+ Projects') === -1) return 'Add a span with "50+ Projects" as the second stat.';
          if (code.indexOf('5 Years') === -1) return 'Add a span with "5 Years" as the third stat.';
          return 'Wrap all three stats in a &lt;div&gt; container.';
        },
        successMsg: 'Great! Your profile card now has a stats section with follower count, projects, and experience.',
        errorMsg: 'Add a stats div with three spans: 1.2K Followers, 50+ Projects, and 5 Years.',
      },
      {
        id: 11,
        title: 'Add Separator and Copyright Footer',
        description: 'The <code>&lt;hr&gt;</code> tag draws a <strong>horizontal line</strong> to separate sections. A footer with copyright information finishes the card professionally.<br><br>➖ <strong>What is &lt;hr&gt;?</strong> A self-closing tag that draws a horizontal line across the page. It visually separates content areas.<br><br>➖ <strong>Why a footer?</strong> It provides closing information — copyright, credits, or links. It signals the end of the card.<br><br>➖ <strong>Where are these used?</strong> Between sections in cards, at the bottom of pages, separating content from footer.',
        task: 'After the stats div, add <code>&lt;hr&gt;</code> on its own line, then <code>&lt;p&gt;&amp;copy; 2026 Alex Johnson. All rights reserved.&lt;/p&gt;</code>.',
        tip: 'The &amp;copy; entity displays the copyright symbol &copy;. HTML entities start with &amp; and end with ;.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n    <h1>Alex Johnson</h1>\n    <p><strong>Web Developer</strong> & <em>Problem Solver</em>. Building the web, one tag at a time.</p>\n    <span>HTML</span>\n    <span>CSS</span>\n    <span>JS</span>\n    <button>Follow</button>\n    <button>Contact</button>\n    <a href="#">Twitter</a>\n    <a href="#">GitHub</a>\n    <a href="#">LinkedIn</a>\n    <div>\n      <span>1.2K Followers</span>\n      <span>50+ Projects</span>\n      <span>5 Years</span>\n    </div>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<hr>') !== -1 && code.indexOf('&copy; 2026 Alex Johnson') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<hr>') === -1) return 'Add &lt;hr&gt; after the stats div.';
          if (code.indexOf('&copy;') === -1) return 'Use &amp;copy; for the copyright symbol.';
          if (code.indexOf('2026 Alex Johnson') === -1) return 'Your copyright should say "&amp;copy; 2026 Alex Johnson. All rights reserved."';
          return 'Add hr first, then the copyright paragraph.';
        },
        successMsg: 'Perfect! Your profile card now has a clean separator and professional footer.',
        errorMsg: 'Add <hr> and copyright paragraph after the stats section.',
      },
      {
        id: 12,
        title: 'Nested Div Structure for Profile Card',
        description: 'Professional websites use <strong>nested divs</strong> to organize content into logical groups. We will wrap related elements into header, body, and footer sections.<br><br>▶ <strong>What is a nested div?</strong> A div placed inside another div. It creates a hierarchy that makes the code easier to read and style.<br><br>▶ <strong>Why nest divs?</strong> Grouping related elements (all profile info together, all actions together) makes your HTML organized and professional.<br><br>▶ <strong>Where is this used?</strong> Every modern website uses nested containers — cards inside sections, sections inside pages, items inside lists.',
        task: 'Wrap the image and h1 in <code>&lt;div class="profile-header"&gt;</code>, the badges through links in <code>&lt;div class="profile-body"&gt;</code>, and the stats through footer in <code>&lt;div class="profile-footer"&gt;</code>.',
        tip: 'Nested divs create a clear structure: header (photo + name), body (bio + actions), footer (stats + copyright).',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Profile Card</title>\n</head>\n<body>\n  <div>\n    <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n    <h1>Alex Johnson</h1>\n    <p><strong>Web Developer</strong> & <em>Problem Solver</em>. Building the web, one tag at a time.</p>\n    <span>HTML</span>\n    <span>CSS</span>\n    <span>JS</span>\n    <button>Follow</button>\n    <button>Contact</button>\n    <a href="#">Twitter</a>\n    <a href="#">GitHub</a>\n    <a href="#">LinkedIn</a>\n    <div>\n      <span>1.2K Followers</span>\n      <span>50+ Projects</span>\n      <span>5 Years</span>\n    </div>\n    <hr>\n    <p>&copy; 2026 Alex Johnson. All rights reserved.</p>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('profile-header') !== -1 && code.indexOf('profile-body') !== -1 && code.indexOf('profile-footer') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('profile-header') === -1) return 'Wrap the image and h1 in &lt;div class="profile-header"&gt;.';
          if (code.indexOf('profile-body') === -1) return 'Wrap the paragraph, badges, buttons, and links in &lt;div class="profile-body"&gt;.';
          if (code.indexOf('profile-footer') === -1) return 'Wrap the stats div, hr, and copyright in &lt;div class="profile-footer"&gt;.';
          return 'Create three nested divs: profile-header, profile-body, and profile-footer.';
        },
        successMsg: '🎉 Excellent! Your Profile Card now has a professional nested structure. Project 1 complete!',
        errorMsg: 'Add three nested divs: profile-header (image + name), profile-body (bio + buttons + links), profile-footer (stats + copyright).',
      },

      /* ===== PROJECT 2: BLOG WEBSITE (Steps 13—25) ===== */

      {
        id: 13,
        title: 'Start Your Blog Website',
        description: 'Time for your <strong>second project</strong>: a Blog Website! Blogs are the most common type of website. You will build a complete blog layout from scratch.<br><br>📰 <strong>What is a blog layout?</strong> It includes a navigation bar, hero section, featured images, article cards, quotes, author info, categories, and footer.<br><br>📰 <strong>Why build a blog?</strong> Blogs teach you to structure long-form content. Almost every website includes a blog or news section.<br><br>📰 <strong>Where are blogs used?</strong> News sites, company blogs, personal portfolios, educational platforms, magazines.',
        task: 'Create the basic HTML structure with the title "My Blog". Include <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.',
        tip: 'Every new project starts with the same basic structure. This becomes automatic with practice!',
        startingCode: '',
        validate: function (code) {
          return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html lang="en">') !== -1 && code.indexOf('<title>My Blog</title>') !== -1 && code.indexOf('<body>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt; at the top.';
          if (code.indexOf('<title>My Blog</title>') === -1) return 'Set the title to "My Blog".';
          if (code.indexOf('<body>') === -1) return 'Add &lt;body&gt; tags after &lt;/head&gt;.';
          return 'Make sure you have DOCTYPE, html, head with title "My Blog", and body.';
        },
        successMsg: 'Perfect! Your Blog project foundation is ready. Let\'s build the navigation next!',
        errorMsg: 'Create a basic HTML structure with the title "My Blog".',
      },
      {
        id: 14,
        title: 'Add Blog Meta Tags',
        description: 'Every blog needs <strong>meta tags</strong> for proper rendering across all devices. The charset ensures text displays correctly, and viewport makes your blog mobile-friendly.<br><br>▶ <strong>Why meta tags for a blog?</strong> Readers access blogs from phones, tablets, and desktops. Viewport meta ensures they all see a properly scaled layout.<br><br>▶ <strong>What happens without viewport?</strong> On mobile, text appears tiny and users must pinch-zoom to read — a terrible experience.<br><br>▶ <strong>Where are these used?</strong> Every modern website includes both meta tags. They are the first elements inside &lt;head&gt;.',
        task: 'Inside <code>&lt;head&gt;</code>, add <code>&lt;meta charset="UTF-8"&gt;</code> and <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>.',
        tip: 'The viewport meta is your first step toward responsive design. Always include it in every HTML page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>My Blog</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<meta charset="UTF-8">') !== -1 && code.indexOf('<meta name="viewport"') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<meta charset="UTF-8">') === -1) return 'Add &lt;meta charset="UTF-8"&gt; in the head.';
          if (code.indexOf('name="viewport"') === -1) return 'Add the viewport meta tag for mobile responsiveness.';
          return 'Your head needs both charset and viewport meta tags.';
        },
        successMsg: 'Great! Your blog now has proper meta tags for all devices.',
        errorMsg: 'Add charset and viewport meta tags inside the head section.',
      },
      {
        id: 15,
        title: 'Create Blog Navbar with Logo',
        description: 'A good blog needs a <strong>navigation bar</strong> with a logo and menu links. The <code>&lt;nav&gt;</code> semantic tag wraps the navigation, and a <code>&lt;span&gt;</code> acts as the blog name.<br><br>▶ <strong>What is &lt;nav&gt;?</strong> A semantic HTML5 element that marks navigation. It helps screen readers skip to the menu.<br><br>▶ <strong>Why a logo span?</strong> The blog name in the navbar helps visitors identify the site. It is usually a link to the homepage.<br><br>▶ <strong>Where are navbars used?</strong> Every multi-page website — blogs, stores, portfolios, news sites — has a navigation bar at the top.',
        task: 'Inside <code>&lt;body&gt;</code>, add <code>&lt;nav&gt;&lt;span&gt;MyBlog&lt;/span&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/nav&gt;</code>.',
        tip: 'The &lt;nav&gt; tag is semantic — it tells browsers "this is the navigation." Always use it instead of plain divs for menus.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<nav>') !== -1 && code.indexOf('</nav>') !== -1 && code.indexOf('<span>MyBlog</span>') !== -1 && code.indexOf('<a href="#">Home</a>') !== -1 && code.indexOf('<a href="#">About</a>') !== -1 && code.indexOf('<a href="#">Contact</a>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<nav>') === -1) return 'Start with &lt;nav&gt; to create the navigation section.';
          if (code.indexOf('<span>MyBlog</span>') === -1) return 'Add &lt;span&gt;MyBlog&lt;/span&gt; as the blog logo/brand.';
          if (code.indexOf('Home') === -1) return 'Add &lt;a href="#"&gt;Home&lt;/a&gt; inside the nav.';
          if (code.indexOf('About') === -1) return 'Add &lt;a href="#"&gt;About&lt;/a&gt; inside the nav.';
          if (code.indexOf('Contact') === -1) return 'Add &lt;a href="#"&gt;Contact&lt;/a&gt; inside the nav.';
          return 'Your navbar should have span "MyBlog" and three links: Home, About, Contact.';
        },
        successMsg: 'Great! Your blog now has a navigation bar with a logo and menu links.',
        errorMsg: 'Create a <nav> with a MyBlog span and Home, About, Contact links.',
      },
      {
        id: 16,
        title: 'Add Blog Hero Section',
        description: 'A <strong>hero section</strong> is a large banner at the top of a webpage that introduces the site. It typically includes a main heading and a descriptive paragraph.<br><br>▶ <strong>What is a hero section?</strong> The first thing visitors see. It should clearly communicate what the site is about.<br><br>▶ <strong>Why use a hero?</strong> It grabs attention and sets the tone. A good hero tells visitors instantly: "You are in the right place."<br><br>▶ <strong>Where are heroes used?</strong> Homepages, landing pages, blogs — any site that wants a strong first impression.',
        task: 'After the <code>&lt;/nav&gt;</code>, add <code>&lt;h1&gt;Welcome to My Blog&lt;/h1&gt;</code> and then <code>&lt;p&gt;Sharing knowledge and building cool stuff with HTML.&lt;/p&gt;</code>.',
        tip: 'The hero is the first thing visitors see. Make your heading clear and welcoming.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h1>Welcome to My Blog</h1>') !== -1 && code.indexOf('<p>Sharing knowledge and building cool stuff with HTML.</p>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h1>Welcome to My Blog</h1>') === -1) return 'Add &lt;h1&gt;Welcome to My Blog&lt;/h1&gt; after the nav.';
          if (code.indexOf('Sharing knowledge') === -1) return 'Add a paragraph after the h1: "Sharing knowledge and building cool stuff with HTML."';
          if (code.indexOf('</p>') === -1) return 'Close your paragraph with &lt;/p&gt;.';
          return 'Add the h1 heading first, then the paragraph tagline.';
        },
        successMsg: 'Perfect! Your blog now has a welcoming hero section with a heading and tagline.',
        errorMsg: 'Add <h1>Welcome to My Blog</h1> and a paragraph tagline after the navbar.',
      },
      {
        id: 17,
        title: 'Add Featured Blog Image',
        description: 'A <strong>featured image</strong> makes your blog visually appealing. The <code>&lt;img&gt;</code> tag embeds a large banner image that represents the blog\'s content.<br><br>🖼️ <strong>What is a featured image?</strong> A large, eye-catching image at the top of the content area. It sets the visual tone.<br><br>🖼️ <strong>Why use images on blogs?</strong> Articles with images get significantly more views and engagement. Images break up text and add visual interest.<br><br>🖼️ <strong>Where are they used?</strong> Blog headers, article previews, social media cards — featured images are a staple of modern blogging.',
        task: 'After the hero paragraph, add <code>&lt;img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image"&gt;</code>.',
        tip: 'The numbers 700/300 in the URL set the image width to 700px and height to 300px — a wide banner format.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('src="https://picsum.photos/seed/blog/700/300"') !== -1 && code.indexOf('alt="Blog banner image"') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<img') === -1) return 'Add an &lt;img&gt; tag after the paragraph.';
          if (code.indexOf('src=') === -1) return 'Your &lt;img&gt; needs a src attribute with the image URL.';
          if (code.indexOf('alt=') === -1) return 'Add alt="Blog banner image" for accessibility.';
          return 'Write: &lt;img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image"&gt;';
        },
        successMsg: 'Great! Your blog now has a large featured banner image.',
        errorMsg: 'Add a featured image with src and alt attributes after the hero paragraph.',
      },
      {
        id: 18,
        title: 'Create Blog Posts Section',
        description: 'A <code>&lt;section&gt;</code> tag groups related content together. We will create a "Latest Posts" section to organize your blog articles.<br><br>📓 <strong>What is &lt;section&gt;?</strong> A semantic HTML5 element that groups related content. It is like a div but with meaning.<br><br>📓 <strong>Why use sections instead of divs?</strong> Sections tell browsers and screen readers "this is a distinct part of the page." It improves accessibility and SEO.<br><br>📓 <strong>Where are sections used?</strong> To group articles, features, testimonials, or any distinct content area on a page.',
        task: 'After the image, add <code>&lt;section&gt;&lt;h2&gt;Latest Posts&lt;/h2&gt;&lt;/section&gt;</code>. The articles will go inside this section.',
        tip: 'Think of &lt;section&gt; as a labeled chapter. Each section should have a heading that describes its content.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n  <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<section>') !== -1 && code.indexOf('<h2>Latest Posts</h2>') !== -1 && code.indexOf('</section>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<section>') === -1) return 'Add &lt;section&gt; after the image to group blog posts.';
          if (code.indexOf('<h2>Latest Posts</h2>') === -1) return 'Add &lt;h2&gt;Latest Posts&lt;/h2&gt; inside the section.';
          if (code.indexOf('</section>') === -1) return 'Close your section with &lt;/section&gt;.';
          return 'Your section should have an h2 heading "Latest Posts".';
        },
        successMsg: 'Perfect! Your blog now has a dedicated section for latest posts.',
        errorMsg: 'Create a <section> with <h2>Latest Posts</h2> inside it.',
      },
      {
        id: 19,
        title: 'Add First Article Card',
        description: 'An <code>&lt;article&gt;</code> tag represents a <strong>self-contained piece of content</strong> — like a blog post. We will add article cards inside the posts section.<br><br>📄 <strong>What is &lt;article&gt;?</strong> A semantic element for independent content that could be reused or syndicated — like a blog post, news story, or forum post.<br><br>📄 <strong>Why use articles?</strong> Search engines understand that article content is the main focus. It improves SEO and accessibility.<br><br>📄 <strong>Where are articles used?</strong> Blog listings, news feeds, search results, portfolio items — any standalone content piece.',
        task: 'Inside the <code>&lt;section&gt;</code>, before <code>&lt;/section&gt;</code>, add <code>&lt;article&gt;&lt;h3&gt;Getting Started with HTML&lt;/h3&gt;&lt;p&gt;HTML is the foundation of every website. Learn the basics and start building!&lt;/p&gt;&lt;/article&gt;</code>.',
        tip: 'Each &lt;article&gt; should make sense on its own — that is why it includes its own heading.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n  <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n  <section>\n    <h2>Latest Posts</h2>\n  </section>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<article>') !== -1 && code.indexOf('<h3>Getting Started with HTML</h3>') !== -1 && code.indexOf('</article>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<article>') === -1) return 'Add an &lt;article&gt; tag inside the section.';
          if (code.indexOf('<h3>Getting Started with HTML</h3>') === -1) return 'Add &lt;h3&gt;Getting Started with HTML&lt;/h3&gt; inside the article.';
          if (code.indexOf('</article>') === -1) return 'Close your article with &lt;/article&gt;.';
          return 'Your article should have an h3 title and a paragraph.';
        },
        successMsg: 'Excellent! Your first blog article card is in place.',
        errorMsg: 'Add an <article> with h3 and paragraph inside the section.',
      },
      {
        id: 20,
        title: 'Add Second Article Card',
        description: 'Now add a <strong>second article</strong> to your blog. Multiple articles create a proper blog listing that visitors can browse.<br><br>▶ <strong>Why multiple articles?</strong> A blog with one post looks empty. Listing multiple articles gives visitors content to explore.<br><br>▶ <strong>What makes a good article preview?</strong> A clear title and a short description that makes readers want to click and read more.<br><br>▶ <strong>Where is this pattern used?</strong> Every blog, news site, and content platform shows multiple article previews in a list or grid.',
        task: 'After the first <code>&lt;/article&gt;</code>, add another: <code>&lt;article&gt;&lt;h3&gt;Why Semantic HTML Matters&lt;/h3&gt;&lt;p&gt;Semantic tags improve accessibility, SEO, and code readability. Learn why they matter.&lt;/p&gt;&lt;/article&gt;</code>.',
        tip: 'Notice how each article is completely self-contained with its own heading and paragraph — that is the article pattern.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n  <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n  <section>\n    <h2>Latest Posts</h2>\n    <article>\n      <h3>Getting Started with HTML</h3>\n      <p>HTML is the foundation of every website. Learn the basics and start building!</p>\n    </article>\n  </section>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h3>Why Semantic HTML Matters</h3>') !== -1 && (code.match(/<article>/g) || []).length >= 2;
        },
        getHint: function (code) {
          if (code.indexOf('<h3>Why Semantic HTML Matters</h3>') === -1) return 'Add a second article with title "Why Semantic HTML Matters".';
          if ((code.match(/<article>/g) || []).length < 2) return 'You need a second &lt;article&gt; tag with an h3 and paragraph.';
          return 'Add the second article after the first one, inside the same section.';
        },
        successMsg: 'Great! Your blog now has two article cards for visitors to browse.',
        errorMsg: 'Add a second article with h3 and paragraph after the first one.',
      },
      {
        id: 21,
        title: 'Add "Read More" Links',
        description: 'A <strong>"Read More" link</strong> invites visitors to view the full article. We use the <code>&lt;a&gt;</code> tag with placeholder href <code>#</code>.<br><br>🔗 <strong>Why "Read More"?</strong> It gives users a clear next action. Article previews with "Read More" links have higher click-through rates.<br><br>🔗 <strong>Where are these used?</strong> Every blog, news site, and content listing uses "Read More" links to connect previews to full articles.<br><br>🔗 <strong>What makes a good link?</strong> Clear call-to-action text like "Read More →" tells users exactly what will happen when they click.',
        task: 'Inside each <code>&lt;article&gt;</code>, after the paragraph, add <code>&lt;a href="#"&gt;Read More &rarr;&lt;/a&gt;</code>. Add it to BOTH articles.',
        tip: 'The &rarr; entity displays an arrow symbol →. It visually reinforces that clicking takes you somewhere.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n  <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n  <section>\n    <h2>Latest Posts</h2>\n    <article>\n      <h3>Getting Started with HTML</h3>\n      <p>HTML is the foundation of every website. Learn the basics and start building!</p>\n    </article>\n    <article>\n      <h3>Why Semantic HTML Matters</h3>\n      <p>Semantic tags improve accessibility, SEO, and code readability. Learn why they matter.</p>\n    </article>\n  </section>\n</body>\n</html>',
        validate: function (code) {
          var count = (code.match(/Read More &rarr;<\/a>/g) || []).length;
          return count >= 2;
        },
        getHint: function (code) {
          if (code.indexOf('Read More') === -1) return 'Add &lt;a href="#"&gt;Read More &rarr;&lt;/a&gt; inside each article.';
          var count = (code.match(/Read More &rarr;<\/a>/g) || []).length;
          if (count < 1) return 'Add a "Read More" link to the first article.';
          if (count < 2) return 'Add a "Read More" link to the second article too.';
          return 'Both articles need: &lt;a href="#"&gt;Read More &rarr;&lt;/a&gt;';
        },
        successMsg: 'Excellent! Both articles now have "Read More" links for navigation.',
        errorMsg: 'Add <a href="#">Read More &rarr;</a> at the end of each article.',
      },
      {
        id: 22,
        title: 'Add Inspirational Quote',
        description: 'The <code>&lt;blockquote&gt;</code> tag displays a <strong>quoted section</strong> from another source. Quotes add credibility and visual variety to your blog.<br><br>💬 <strong>What is &lt;blockquote&gt;?</strong> A semantic tag for long quotes. Browsers indent it to distinguish from regular text.<br><br>💬 <strong>Why use quotes?</strong> They break up long text and highlight key messages. Testimonials, expert opinions, and famous quotes add credibility.<br><br>💬 <strong>Where are quotes used?</strong> Articles, testimonials, reviews, case studies — any content that cites or highlights a meaningful statement.',
        task: 'After the <code>&lt;/section&gt;</code> (closing the posts section), add <code>&lt;blockquote&gt;&lt;p&gt;The best way to predict the future is to create it. — Peter Drucker&lt;/p&gt;&lt;/blockquote&gt;</code>.',
        tip: 'A &lt;blockquote&gt; can contain paragraphs, headings, and other HTML inside. Always include a &lt;p&gt; for the quoted text.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n  <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n  <section>\n    <h2>Latest Posts</h2>\n    <article>\n      <h3>Getting Started with HTML</h3>\n      <p>HTML is the foundation of every website. Learn the basics and start building!</p>\n      <a href="#">Read More &rarr;</a>\n    </article>\n    <article>\n      <h3>Why Semantic HTML Matters</h3>\n      <p>Semantic tags improve accessibility, SEO, and code readability. Learn why they matter.</p>\n      <a href="#">Read More &rarr;</a>\n    </article>\n  </section>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<blockquote>') !== -1 && code.indexOf('</blockquote>') !== -1 && code.indexOf('The best way to predict the future') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<blockquote>') === -1) return 'Add &lt;blockquote&gt; after the posts section.';
          if (code.indexOf('The best way to predict the future') === -1) return 'Inside the blockquote: &lt;p&gt;The best way to predict the future is to create it. — Peter Drucker&lt;/p&gt;';
          if (code.indexOf('</blockquote>') === -1) return 'Close your blockquote with &lt;/blockquote&gt;.';
          return 'Your blockquote should have a paragraph with the quote text.';
        },
        successMsg: 'Great! Your blog now has an inspirational quote to engage readers.',
        errorMsg: 'Add a <blockquote> with an inspirational quote about creating the future.',
      },
      {
        id: 23,
        title: 'Add Author Bio Section',
        description: 'An <strong>author bio</strong> tells readers who writes the blog. It typically includes a small image, name, and short description.<br><br>► <strong>What is an author bio?</strong> A section that introduces the writer. It builds trust and personal connection with readers.<br><br>► <strong>Why include it?</strong> Readers want to know who is behind the content. Author bios increase credibility and engagement.<br><br>► <strong>Where is this used?</strong> Blogs, news articles, guest posts, podcasts — anywhere content has a creator.',
        task: 'After the blockquote, add <code>&lt;div&gt;&lt;img src="https://picsum.photos/seed/author/60" alt="Author photo"&gt;&lt;p&gt;&lt;strong&gt;Alex Johnson&lt;/strong&gt; — Web developer and blogger sharing knowledge with the world.&lt;/p&gt;&lt;/div&gt;</code>.',
        tip: 'Author bios usually appear after articles so readers can learn about the writer after consuming the content.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n  <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n  <section>\n    <h2>Latest Posts</h2>\n    <article>\n      <h3>Getting Started with HTML</h3>\n      <p>HTML is the foundation of every website. Learn the basics and start building!</p>\n      <a href="#">Read More &rarr;</a>\n    </article>\n    <article>\n      <h3>Why Semantic HTML Matters</h3>\n      <p>Semantic tags improve accessibility, SEO, and code readability. Learn why they matter.</p>\n      <a href="#">Read More &rarr;</a>\n    </article>\n  </section>\n  <blockquote>\n    <p>The best way to predict the future is to create it. — Peter Drucker</p>\n  </blockquote>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('src="https://picsum.photos/seed/author/60"') !== -1 && code.indexOf('alt="Author photo"') !== -1 && code.indexOf('Alex Johnson') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('src="https://picsum.photos/seed/author/60"') === -1) return 'Add an author image with src="https://picsum.photos/seed/author/60".';
          if (code.indexOf('alt="Author photo"') === -1) return 'Add alt="Author photo" to the author image.';
          if (code.indexOf('Alex Johnson') === -1) return 'Include "Alex Johnson" as the author name with &lt;strong&gt; tags.';
          return 'Your author bio should have an image, name in strong, and description.';
        },
        successMsg: 'Perfect! Your blog now has an author bio section that builds trust with readers.',
        errorMsg: 'Add an author bio div with image, name in strong, and description.',
      },
      {
        id: 24,
        title: 'Add Blog Categories List',
        description: 'Categories help readers find content by topic. We use an <code>&lt;ul&gt;</code> (unordered list) to display category links.<br><br>📋 <strong>What are categories?</strong> Topics that group related posts — like HTML, CSS, JavaScript. They help organize content.<br><br>📋 <strong>Why use categories?</strong> Readers can browse all posts in a topic they care about. It improves navigation and user experience.<br><br>📋 <strong>Where are categories used?</strong> Blogs, news sites, documentation, e-commerce — any site with multiple content topics.',
        task: 'After the author div, add <code>&lt;div&gt;&lt;h3&gt;Categories&lt;/h3&gt;&lt;ul&gt;&lt;li&gt;&lt;a href="#"&gt;HTML&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;CSS&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;</code>.',
        tip: 'Each category is a list item with a link. This pattern is used in blog sidebars and footers everywhere.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n  <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n  <section>\n    <h2>Latest Posts</h2>\n    <article>\n      <h3>Getting Started with HTML</h3>\n      <p>HTML is the foundation of every website. Learn the basics and start building!</p>\n      <a href="#">Read More &rarr;</a>\n    </article>\n    <article>\n      <h3>Why Semantic HTML Matters</h3>\n      <p>Semantic tags improve accessibility, SEO, and code readability. Learn why they matter.</p>\n      <a href="#">Read More &rarr;</a>\n    </article>\n  </section>\n  <blockquote>\n    <p>The best way to predict the future is to create it. — Peter Drucker</p>\n  </blockquote>\n  <div>\n    <img src="https://picsum.photos/seed/author/60" alt="Author photo">\n    <p><strong>Alex Johnson</strong> — Web developer and blogger sharing knowledge with the world.</p>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h3>Categories</h3>') !== -1 && code.indexOf('<li><a href="#">HTML</a></li>') !== -1 && code.indexOf('<li><a href="#">CSS</a></li>') !== -1 && code.indexOf('<li><a href="#">JavaScript</a></li>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h3>Categories</h3>') === -1) return 'Add &lt;h3&gt;Categories&lt;/h3&gt; to label the section.';
          if (code.indexOf('<li><a href="#">HTML</a></li>') === -1) return 'Add a list item with an HTML category link.';
          if (code.indexOf('<li><a href="#">CSS</a></li>') === -1) return 'Add a list item with a CSS category link.';
          if (code.indexOf('<li><a href="#">JavaScript</a></li>') === -1) return 'Add a list item with a JavaScript category link.';
          return 'Wrap the h3 and ul in a div container.';
        },
        successMsg: 'Great! Your blog now has categories to help readers find topics.',
        errorMsg: 'Add a Categories section with an h3 and an unordered list of three category links.',
      },
      {
        id: 25,
        title: 'Add Blog Footer with Navigation',
        description: 'A <strong>footer</strong> appears at the bottom of every webpage. It contains navigation links, copyright information, and sometimes social media links.<br><br>▶ <strong>What is a footer?</strong> The bottom section of a page. It typically includes secondary navigation, copyright, and legal links.<br><br>▶ <strong>Why include a footer?</strong> Footers provide a consistent navigation point at the bottom of every page. Users often scroll to the bottom to find links.<br><br>▶ <strong>Where are footers used?</strong> Every website has a footer with copyright, terms, privacy policy, and sometimes a sitemap.',
        task: 'At the end of the <code>&lt;body&gt;</code>, add <code>&lt;hr&gt;&lt;footer&gt;&lt;p&gt;&amp;copy; 2026 My Blog. All rights reserved.&lt;/p&gt;&lt;p&gt;&lt;a href="#"&gt;Privacy&lt;/a&gt; | &lt;a href="#"&gt;Terms&lt;/a&gt;&lt;/p&gt;&lt;/footer&gt;</code>.',
        tip: 'The &lt;footer&gt; tag is semantic — it tells browsers "this is the page footer." Use it instead of a plain div.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Blog</title>\n</head>\n<body>\n  <nav>\n    <span>MyBlog</span>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n  <h1>Welcome to My Blog</h1>\n  <p>Sharing knowledge and building cool stuff with HTML.</p>\n  <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n  <section>\n    <h2>Latest Posts</h2>\n    <article>\n      <h3>Getting Started with HTML</h3>\n      <p>HTML is the foundation of every website. Learn the basics and start building!</p>\n      <a href="#">Read More &rarr;</a>\n    </article>\n    <article>\n      <h3>Why Semantic HTML Matters</h3>\n      <p>Semantic tags improve accessibility, SEO, and code readability. Learn why they matter.</p>\n      <a href="#">Read More &rarr;</a>\n    </article>\n  </section>\n  <blockquote>\n    <p>The best way to predict the future is to create it. — Peter Drucker</p>\n  </blockquote>\n  <div>\n    <img src="https://picsum.photos/seed/author/60" alt="Author photo">\n    <p><strong>Alex Johnson</strong> — Web developer and blogger sharing knowledge with the world.</p>\n  </div>\n  <div>\n    <h3>Categories</h3>\n    <ul>\n      <li><a href="#">HTML</a></li>\n      <li><a href="#">CSS</a></li>\n      <li><a href="#">JavaScript</a></li>\n    </ul>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<footer>') !== -1 && code.indexOf('</footer>') !== -1 && code.indexOf('&copy; 2026 My Blog') !== -1 && code.indexOf('Privacy') !== -1 && code.indexOf('Terms') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<footer>') === -1) return 'Add &lt;footer&gt; at the bottom of the body.';
          if (code.indexOf('&copy; 2026 My Blog') === -1) return 'Add copyright: &amp;copy; 2026 My Blog. All rights reserved.';
          if (code.indexOf('Privacy') === -1) return 'Add a Privacy link inside the footer.';
          if (code.indexOf('Terms') === -1) return 'Add a Terms link inside the footer.';
          return 'Your footer should have copyright text and Privacy | Terms links.';
        },
        successMsg: '🎉 Excellent! Your Blog Website is complete! Navbar, hero, image, articles, quotes, author, categories, and footer — a real blog!',
        errorMsg: 'Add a footer with copyright, Privacy link, and Terms link at the bottom.',
      },

      /* ===== PROJECT 3: PORTFOLIO WEBSITE (Steps 26—38) ===== */

      {
        id: 26,
        title: 'Start Your Portfolio Website',
        description: 'Time for your <strong>third project</strong>: a Portfolio Website! A portfolio showcases your work, skills, and experience — it is essential for creative professionals.<br><br>▶ <strong>What is a portfolio website?</strong> A personal site that displays your projects, skills, and contact information. It is your online resume.<br><br>▶ <strong>Why build a portfolio?</strong> Employers and clients look at portfolios to evaluate your skills. A well-structured portfolio opens doors.<br><br>▶ <strong>Where are portfolios used?</strong> Freelancers, designers, developers, artists, photographers — anyone who needs to showcase work.',
        task: 'Create the basic HTML structure with the title "My Portfolio". Include <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, and meta tags.',
        tip: 'A portfolio is your professional identity on the web. Make the structure clean and organized.',
        startingCode: '',
        validate: function (code) {
          return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html lang="en">') !== -1 && code.indexOf('<title>My Portfolio</title>') !== -1 && code.indexOf('<body>') !== -1 && code.indexOf('<meta charset=') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt;.';
          if (code.indexOf('<title>My Portfolio</title>') === -1) return 'Set the title to "My Portfolio".';
          if (code.indexOf('<meta charset=') === -1) return 'Add &lt;meta charset="UTF-8"&gt; in the head.';
          return 'Make sure you have DOCTYPE, html, head with title "My Portfolio", meta tags, and body.';
        },
        successMsg: 'Perfect! Your Portfolio project foundation is ready. Let\'s build a stunning hero section!',
        errorMsg: 'Create a basic HTML structure with title "My Portfolio" and meta tags.',
      },
      {
        id: 27,
        title: 'Add Portfolio Viewport Meta',
        description: 'The <strong>viewport meta tag</strong> ensures your portfolio looks great on all devices — phones, tablets, and desktops. This is critical for professional sites.<br><br>▶ <strong>Why is viewport critical for portfolios?</strong> Recruiters often browse portfolios on mobile. A non-responsive portfolio creates a bad first impression.<br><br>▶ <strong>What does viewport do?</strong> It tells mobile browsers to scale the page properly instead of zooming out to show the full desktop layout.<br><br>▶ <strong>Where is this used?</strong> Every professional website includes the viewport meta tag for responsive behavior.',
        task: 'Inside <code>&lt;head&gt;</code>, add <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> if you have not already.',
        tip: 'Without the viewport meta, your portfolio will look tiny and zoomed out on phones.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Portfolio</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<meta name="viewport" content="width=device-width, initial-scale=1.0">') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('name="viewport"') === -1) return 'Add &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;.';
          return 'Make sure the viewport meta tag is inside the &lt;head&gt; section.';
        },
        successMsg: 'Great! Your portfolio is now mobile-friendly with the viewport meta tag.',
        errorMsg: 'Add the viewport meta tag inside the head section.',
      },
      {
        id: 28,
        title: 'Create Portfolio Hero Banner',
        description: 'The <strong>hero banner</strong> is the first thing visitors see on your portfolio. It should make a strong impression with your name and role.<br><br>▶ <strong>What is a hero banner?</strong> A large, prominent section at the top of the page with your name, title, and a call to action.<br><br>▶ <strong>Why does it matter?</strong> Visitors decide within seconds whether to explore your site. A compelling hero keeps them interested.<br><br>▶ <strong>Where is this used?</strong> Every portfolio, landing page, and professional website has a hero section.',
        task: 'Inside <code>&lt;body&gt;</code>, add <code>&lt;h1&gt;I\'m Alex Johnson&lt;/h1&gt;</code> and <code>&lt;p&gt;A passionate &lt;strong&gt;Web Developer&lt;/strong&gt; creating modern, accessible websites.&lt;/p&gt;</code>.',
        tip: 'Your hero should immediately tell visitors who you are and what you do — make every word count.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h1>I\'m Alex Johnson</h1>') !== -1 && code.indexOf('<strong>Web Developer</strong>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h1>I\'m Alex Johnson</h1>') === -1) return 'Add &lt;h1&gt;I\'m Alex Johnson&lt;/h1&gt; as the main heading.';
          if (code.indexOf('<strong>Web Developer</strong>') === -1) return 'Wrap "Web Developer" in &lt;strong&gt; tags inside the paragraph.';
          return 'Your hero should have an h1 with your name and a paragraph with your role.';
        },
        successMsg: 'Excellent! Your portfolio hero section makes a strong first impression.',
        errorMsg: 'Add an h1 with "I\'m Alex Johnson" and a paragraph with "Web Developer" in strong tags.',
      },
      {
        id: 29,
        title: 'Add Portfolio Profile Image',
        description: 'A <strong>professional photo</strong> makes your portfolio personal and trustworthy. Visitors connect better when they see a face behind the work.<br><br>🖼️ <strong>Why a profile photo?</strong> It humanizes your portfolio. People trust and remember faces more than text.<br><br>🖼️ <strong>Where should it go?</strong> Near the top of the page, close to your name. The hero section is the perfect place.<br><br>🖼️ <strong>What makes a good profile image?</strong> A clear headshot with good lighting. Use alt text that describes the photo for accessibility.',
        task: 'After the paragraph, add <code>&lt;img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo"&gt;</code>.',
        tip: 'Use a larger image (150px) for the portfolio since it is a key visual element on the page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('src="https://picsum.photos/seed/portfolio/150"') !== -1 && code.indexOf('alt="Alex Johnson profile photo"') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<img') === -1) return 'Add an &lt;img&gt; tag after the hero paragraph.';
          if (code.indexOf('src=') === -1) return 'Your &lt;img&gt; needs a src attribute.';
          if (code.indexOf('alt=') === -1) return 'Add alt="Alex Johnson profile photo" for accessibility.';
          return 'Write: &lt;img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo"&gt;';
        },
        successMsg: 'Great! Your portfolio now has a professional profile photo.',
        errorMsg: 'Add a profile image after the hero paragraph.',
      },
      {
        id: 30,
        title: 'Add About Section',
        description: 'The <strong>About section</strong> tells visitors your story — who you are, what you do, and what makes you unique.<br><br>▶ <strong>What is an About section?</strong> A personal introduction that goes beyond your job title. It explains your passion and approach.<br><br>▶ <strong>Why does it matter?</strong> Clients and employers want to know who they might work with. A good About section builds connection.<br><br>▶ <strong>Where is it used?</strong> Every portfolio, company website, and personal site has an About section.',
        task: 'After the image, add <code>&lt;h2&gt;About Me&lt;/h2&gt;</code> and <code>&lt;p&gt;I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.&lt;/p&gt;</code>.',
        tip: 'Write your About section in first person ("I") — it feels more personal and authentic.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h2>About Me</h2>') !== -1 && code.indexOf('self-taught web developer') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h2>About Me</h2>') === -1) return 'Add &lt;h2&gt;About Me&lt;/h2&gt; after the image.';
          if (code.indexOf('self-taught web developer') === -1) return 'Write a paragraph starting with "I\'m a self-taught web developer..."';
          return 'Your About section should have an h2 heading and a descriptive paragraph.';
        },
        successMsg: 'Perfect! Your About Me section tells visitors your story.',
        errorMsg: 'Add <h2>About Me</h2> and a paragraph about yourself.',
      },
      {
        id: 31,
        title: 'Add Skills Section with List',
        description: 'A <strong>skills section</strong> showcases your technical abilities. We will use an unordered list (<code>&lt;ul&gt;</code>) to display each skill.<br><br>💪 <strong>What is a skills section?</strong> A list of technologies or abilities you have mastered. It helps employers quickly assess your fit.<br><br>💪 <strong>Why use a list?</strong> Lists are easy to scan. Recruiters spend seconds reviewing skills — make them clear and organized.<br><br>💪 <strong>Where is this used?</strong> Resumes, portfolios, LinkedIn profiles, freelancer platforms — anywhere skills are evaluated.',
        task: 'After the About section, add <code>&lt;h2&gt;My Skills&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;HTML5&lt;/li&gt;&lt;li&gt;CSS3&lt;/li&gt;&lt;li&gt;JavaScript&lt;/li&gt;&lt;li&gt;Responsive Design&lt;/li&gt;&lt;/ul&gt;</code>.',
        tip: 'List your skills in order of proficiency. Use &lt;ul&gt; for unordered lists since the order does not matter.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n  <h2>About Me</h2>\n  <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h2>My Skills</h2>') !== -1 && code.indexOf('<li>HTML5</li>') !== -1 && code.indexOf('<li>CSS3</li>') !== -1 && code.indexOf('<li>JavaScript</li>') !== -1 && code.indexOf('<li>Responsive Design</li>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h2>My Skills</h2>') === -1) return 'Add &lt;h2&gt;My Skills&lt;/h2&gt; to label the section.';
          if (code.indexOf('<li>HTML5</li>') === -1) return 'Add &lt;li&gt;HTML5&lt;/li&gt; as the first skill.';
          if (code.indexOf('<li>CSS3</li>') === -1) return 'Add &lt;li&gt;CSS3&lt;/li&gt; as the second skill.';
          if (code.indexOf('<li>JavaScript</li>') === -1) return 'Add &lt;li&gt;JavaScript&lt;/li&gt; as the third skill.';
          if (code.indexOf('<li>Responsive Design</li>') === -1) return 'Add &lt;li&gt;Responsive Design&lt;/li&gt; as the fourth skill.';
          return 'Wrap all list items inside &lt;ul&gt;...&lt;/ul&gt;.';
        },
        successMsg: 'Great! Your skills section clearly lists your technical abilities.',
        errorMsg: 'Add a "My Skills" section with an unordered list of four skills.',
      },
      {
        id: 32,
        title: 'Add Projects Section Header',
        description: 'A <strong>projects section</strong> showcases the work you have done. We will use a section container with a heading to organize your work samples.<br><br>► <strong>What is a projects section?</strong> A gallery of your best work. Each project should include a title, description, and link.<br><br>► <strong>Why showcase projects?</strong> Employers want to see what you have built, not just what skills you claim. Real projects prove your abilities.<br><br>► <strong>Where is this used?</strong> Every portfolio website features a projects or work section as the main attraction.',
        task: 'Add <code>&lt;section&gt;&lt;h2&gt;My Projects&lt;/h2&gt;&lt;/section&gt;</code> after the skills section.',
        tip: 'Using &lt;section&gt; instead of &lt;div&gt; tells search engines this is a major content area.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n  <h2>About Me</h2>\n  <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n  <h2>My Skills</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>CSS3</li>\n    <li>JavaScript</li>\n    <li>Responsive Design</li>\n  </ul>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<section>') !== -1 && code.indexOf('<h2>My Projects</h2>') !== -1 && code.indexOf('</section>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<section>') === -1) return 'Add &lt;section&gt; to wrap the projects content.';
          if (code.indexOf('<h2>My Projects</h2>') === -1) return 'Add &lt;h2&gt;My Projects&lt;/h2&gt; inside the section.';
          return 'Your section should have an h2 heading "My Projects".';
        },
        successMsg: 'Great! Your projects section is ready for project cards.',
        errorMsg: 'Create a <section> with <h2>My Projects</h2>.',
      },
      {
        id: 33,
        title: 'Add First Project Card',
        description: 'Each project gets its own <code>&lt;article&gt;</code> inside the projects section. An article can hold a title, description, and a link to view the project.<br><br>▶ <strong>What is a project card?</strong> A compact preview of a project with a title, brief description, and link. Like a business card for your work.<br><br>▶ <strong>Why use articles for projects?</strong> Each project is independent content. Using &lt;article&gt; is semantically correct and improves accessibility.<br><br>▶ <strong>Where are project cards used?</strong> Portfolio galleries, agency websites, freelance marketplaces — anywhere work is displayed.',
        task: 'Inside the <code>&lt;section&gt;</code>, add <code>&lt;article&gt;&lt;h3&gt;Personal Profile Card&lt;/h3&gt;&lt;p&gt;A responsive profile card built with semantic HTML. Features image, bio, social links, and stats.&lt;/p&gt;&lt;/article&gt;</code>.',
        tip: 'Each project card should be self-contained so it could stand alone if needed.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n  <h2>About Me</h2>\n  <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n  <h2>My Skills</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>CSS3</li>\n    <li>JavaScript</li>\n    <li>Responsive Design</li>\n  </ul>\n  <section>\n    <h2>My Projects</h2>\n  </section>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h3>Personal Profile Card</h3>') !== -1 && code.indexOf('A responsive profile card built with semantic HTML') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<article>') === -1) return 'Add an &lt;article&gt; tag inside the section.';
          if (code.indexOf('<h3>Personal Profile Card</h3>') === -1) return 'Add &lt;h3&gt;Personal Profile Card&lt;/h3&gt; as the project title.';
          if (code.indexOf('A responsive profile card') === -1) return 'Add a paragraph describing the project.';
          return 'Your project card should have an h3 title and descriptive paragraph.';
        },
        successMsg: 'Perfect! Your first project card showcases the Profile Card you built.',
        errorMsg: 'Add an article with h3 and paragraph for your first project.',
      },
      {
        id: 34,
        title: 'Add Second Project Card',
        description: 'Add another <strong>project card</strong> to show you have built multiple projects. A portfolio with one project looks incomplete.<br><br>▶ <strong>Why multiple projects?</strong> They demonstrate breadth of experience. Each project shows different skills and capabilities.<br><br>▶ <strong>What should each card include?</strong> A descriptive title and a 1-2 sentence explanation. Keep it scannable — recruiters skim quickly.<br><br>▶ <strong>Where is this pattern used?</strong> GitHub profiles, Dribbble portfolios, Behance galleries — all show multiple projects.',
        task: 'After the first <code>&lt;/article&gt;</code>, add <code>&lt;article&gt;&lt;h3&gt;Simple Blog Layout&lt;/h3&gt;&lt;p&gt;A complete blog website with navigation, articles, quotes, categories, and footer. Built entirely with semantic HTML.&lt;/p&gt;&lt;/article&gt;</code>.',
        tip: 'Add project cards in order of importance — lead with your strongest or most recent work.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n  <h2>About Me</h2>\n  <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n  <h2>My Skills</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>CSS3</li>\n    <li>JavaScript</li>\n    <li>Responsive Design</li>\n  </ul>\n  <section>\n    <h2>My Projects</h2>\n    <article>\n      <h3>Personal Profile Card</h3>\n      <p>A responsive profile card built with semantic HTML. Features image, bio, social links, and stats.</p>\n    </article>\n  </section>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h3>Simple Blog Layout</h3>') !== -1 && (code.match(/<article>/g) || []).length >= 2;
        },
        getHint: function (code) {
          if (code.indexOf('<h3>Simple Blog Layout</h3>') === -1) return 'Add a second article with h3 "Simple Blog Layout".';
          if ((code.match(/<article>/g) || []).length < 2) return 'You need a second &lt;article&gt; tag.';
          return 'Add the second project card after the first one, inside the same section.';
        },
        successMsg: 'Great! Your portfolio now shows two impressive projects.',
        errorMsg: 'Add a second project card for the Simple Blog Layout.',
      },
      {
        id: 35,
        title: 'Add Contact Form Section',
        description: 'A <strong>contact form</strong> lets visitors reach out to you. We use the <code>&lt;form&gt;</code> tag with labeled <code>&lt;input&gt;</code> fields.<br><br>▶ <strong>What is a contact form?</strong> A set of input fields that collect visitor messages. It typically includes name, email, and a message field.<br><br>▶ <strong>Why include a form?</strong> It makes it easy for potential employers or clients to contact you directly from your portfolio.<br><br>▶ <strong>Where is this used?</strong> Portfolios, business websites, landing pages — any site that wants visitors to get in touch.',
        task: 'After the projects section, add <code>&lt;h2&gt;Contact Me&lt;/h2&gt;&lt;form&gt;&lt;label&gt;Name &lt;input placeholder="Your name"&gt;&lt;/label&gt;&lt;label&gt;Email &lt;input type="email" placeholder="Your email"&gt;&lt;/label&gt;&lt;/form&gt;</code>.',
        tip: 'Use type="email" for email inputs — it tells browsers to validate the email format automatically.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n  <h2>About Me</h2>\n  <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n  <h2>My Skills</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>CSS3</li>\n    <li>JavaScript</li>\n    <li>Responsive Design</li>\n  </ul>\n  <section>\n    <h2>My Projects</h2>\n    <article>\n      <h3>Personal Profile Card</h3>\n      <p>A responsive profile card built with semantic HTML. Features image, bio, social links, and stats.</p>\n    </article>\n    <article>\n      <h3>Simple Blog Layout</h3>\n      <p>A complete blog website with navigation, articles, quotes, categories, and footer. Built entirely with semantic HTML.</p>\n    </article>\n  </section>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<form>') !== -1 && code.indexOf('<label>Name <input placeholder="Your name"></label>') !== -1 && code.indexOf('<label>Email <input type="email" placeholder="Your email"></label>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<form>') === -1) return 'Add &lt;form&gt; to wrap your input fields.';
          if (code.indexOf('placeholder="Your name"') === -1) return 'Add a Name input with placeholder "Your name".';
          if (code.indexOf('type="email"') === -1) return 'Add an Email input with type="email" and placeholder "Your email".';
          return 'Your form should have labeled Name and Email inputs.';
        },
        successMsg: 'Perfect! Your contact form has name and email fields.',
        errorMsg: 'Add a "Contact Me" heading and a form with Name and Email inputs.',
      },
      {
        id: 36,
        title: 'Add Message Field and Submit Button',
        description: 'A contact form needs a <strong>message field</strong> for longer text and a <strong>submit button</strong> to send the form.<br><br>► <strong>What is &lt;textarea&gt;?</strong> A multi-line text input for messages. Unlike &lt;input&gt;, it allows line breaks.<br><br>► <strong>What is type="submit"?</strong> A button that submits the form. Later, you can connect it to a service that sends emails.<br><br>► <strong>Where is this used?</strong> Every contact form on the web has a message area and a submit button.',
        task: 'Inside the form, add <code>&lt;label&gt;Message &lt;textarea placeholder="Your message"&gt;&lt;/textarea&gt;&lt;/label&gt;</code> and <code>&lt;button type="submit"&gt;Send Message&lt;/button&gt;</code>.',
        tip: 'Unlike &lt;input&gt;, &lt;textarea&gt; is NOT self-closing — you must write &lt;/textarea&gt;.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n  <h2>About Me</h2>\n  <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n  <h2>My Skills</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>CSS3</li>\n    <li>JavaScript</li>\n    <li>Responsive Design</li>\n  </ul>\n  <section>\n    <h2>My Projects</h2>\n    <article>\n      <h3>Personal Profile Card</h3>\n      <p>A responsive profile card built with semantic HTML. Features image, bio, social links, and stats.</p>\n    </article>\n    <article>\n      <h3>Simple Blog Layout</h3>\n      <p>A complete blog website with navigation, articles, quotes, categories, and footer. Built entirely with semantic HTML.</p>\n    </article>\n  </section>\n  <h2>Contact Me</h2>\n  <form>\n    <label>Name <input placeholder="Your name"></label>\n    <label>Email <input type="email" placeholder="Your email"></label>\n  </form>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<textarea') !== -1 && code.indexOf('</textarea>') !== -1 && code.indexOf('<button type="submit">Send Message</button>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<textarea') === -1) return 'Add &lt;textarea placeholder="Your message"&gt;&lt;/textarea&gt; with a label.';
          if (code.indexOf('</textarea>') === -1) return 'Close the textarea with &lt;/textarea&gt;.';
          if (code.indexOf('<button type="submit">Send Message</button>') === -1) return 'Add &lt;button type="submit"&gt;Send Message&lt;/button&gt;.';
          return 'Add the message textarea and submit button inside the form.';
        },
        successMsg: 'Excellent! Your contact form is complete with message field and submit button.',
        errorMsg: 'Add a message textarea and a Send Message submit button to the form.',
      },
      {
        id: 37,
        title: 'Add Client Testimonials',
        description: 'Testimonials build <strong>social proof</strong>. When potential clients see positive feedback from others, they trust you more.<br><br>💬 <strong>What are testimonials?</strong> Quotes from satisfied clients or colleagues. They validate your skills and work ethic.<br><br>💬 <strong>Why include them?</strong> People trust peer recommendations more than self-promotion. Testimonials are your portfolio\'s credibility boost.<br><br>💬 <strong>Where are they used?</strong> Portfolios, agency websites, product pages, freelancer profiles — anywhere trust matters.',
        task: 'After the form, add <code>&lt;h2&gt;Testimonials&lt;/h2&gt;&lt;blockquote&gt;&lt;p&gt;Alex built an amazing website for us. Highly recommended!&lt;/p&gt;&lt;cite&gt;— Sarah Johnson, CEO&lt;/cite&gt;&lt;/blockquote&gt;&lt;blockquote&gt;&lt;p&gt;Great attention to detail and clean code. A pleasure to work with.&lt;/p&gt;&lt;cite&gt;— Mike Chen, Developer&lt;/cite&gt;&lt;/blockquote&gt;</code>.',
        tip: 'The &lt;cite&gt; tag is used to credit the source of a quote. It is typically rendered in italic.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n  <h2>About Me</h2>\n  <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n  <h2>My Skills</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>CSS3</li>\n    <li>JavaScript</li>\n    <li>Responsive Design</li>\n  </ul>\n  <section>\n    <h2>My Projects</h2>\n    <article>\n      <h3>Personal Profile Card</h3>\n      <p>A responsive profile card built with semantic HTML. Features image, bio, social links, and stats.</p>\n    </article>\n    <article>\n      <h3>Simple Blog Layout</h3>\n      <p>A complete blog website with navigation, articles, quotes, categories, and footer. Built entirely with semantic HTML.</p>\n    </article>\n  </section>\n  <h2>Contact Me</h2>\n  <form>\n    <label>Name <input placeholder="Your name"></label>\n    <label>Email <input type="email" placeholder="Your email"></label>\n    <label>Message <textarea placeholder="Your message"></textarea></label>\n    <button type="submit">Send Message</button>\n  </form>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<cite>') !== -1 && (code.match(/<blockquote>/g) || []).length >= 2;
        },
        getHint: function (code) {
          if (code.indexOf('<h2>Testimonials</h2>') === -1) return 'Add &lt;h2&gt;Testimonials&lt;/h2&gt; to label the section.';
          if (code.indexOf('<blockquote>') === -1) return 'Add a &lt;blockquote&gt; with a testimonial quote.';
          if (code.indexOf('<cite>') === -1) return 'Use &lt;cite&gt; to credit the person giving the testimonial.';
          if ((code.match(/<blockquote>/g) || []).length < 2) return 'Add a second testimonial blockquote.';
          return 'Add two testimonials, each with a blockquote and cite.';
        },
        successMsg: 'Great! Your portfolio now has powerful social proof with client testimonials.',
        errorMsg: 'Add a Testimonials section with two blockquotes and cite tags.',
      },
      {
        id: 38,
        title: 'Add Portfolio Footer',
        description: 'The <strong>footer</strong> wraps up your portfolio with copyright, social links, and navigation. It is the final touch that makes the page complete.<br><br>▶ <strong>What belongs in a footer?</strong> Copyright information, social media links, and sometimes a "Back to top" link.<br><br>▶ <strong>Why a footer?</strong> It provides a consistent endpoint. Visitors who scroll to the bottom find everything they need to connect with you.<br><br>▶ <strong>Where is this used?</strong> Every website has a footer. It is one of the most universally recognized web patterns.',
        task: 'At the end of <code>&lt;body&gt;</code>, add <code>&lt;hr&gt;&lt;footer&gt;&lt;p&gt;&amp;copy; 2026 Alex Johnson. Built with &amp;hearts; using HTML.&lt;/p&gt;&lt;a href="#"&gt;GitHub&lt;/a&gt; | &lt;a href="#"&gt;LinkedIn&lt;/a&gt; | &lt;a href="#"&gt;Twitter&lt;/a&gt;&lt;/footer&gt;</code>.',
        tip: 'The &amp;hearts; entity displays a heart symbol ♥. Small touches like this add personality to your code.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>I\'m Alex Johnson</h1>\n  <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n  <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n  <h2>About Me</h2>\n  <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n  <h2>My Skills</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>CSS3</li>\n    <li>JavaScript</li>\n    <li>Responsive Design</li>\n  </ul>\n  <section>\n    <h2>My Projects</h2>\n    <article>\n      <h3>Personal Profile Card</h3>\n      <p>A responsive profile card built with semantic HTML. Features image, bio, social links, and stats.</p>\n    </article>\n    <article>\n      <h3>Simple Blog Layout</h3>\n      <p>A complete blog website with navigation, articles, quotes, categories, and footer. Built entirely with semantic HTML.</p>\n    </article>\n  </section>\n  <h2>Contact Me</h2>\n  <form>\n    <label>Name <input placeholder="Your name"></label>\n    <label>Email <input type="email" placeholder="Your email"></label>\n    <label>Message <textarea placeholder="Your message"></textarea></label>\n    <button type="submit">Send Message</button>\n  </form>\n  <h2>Testimonials</h2>\n  <blockquote>\n    <p>Alex built an amazing website for us. Highly recommended!</p>\n    <cite>— Sarah Johnson, CEO</cite>\n  </blockquote>\n  <blockquote>\n    <p>Great attention to detail and clean code. A pleasure to work with.</p>\n    <cite>— Mike Chen, Developer</cite>\n  </blockquote>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<footer>') !== -1 && code.indexOf('&copy; 2026 Alex Johnson') !== -1 && code.indexOf('&hearts;') !== -1 && code.indexOf('GitHub') !== -1 && code.indexOf('LinkedIn') !== -1 && code.indexOf('Twitter') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<footer>') === -1) return 'Add &lt;footer&gt; at the bottom of the body.';
          if (code.indexOf('&copy;') === -1) return 'Add copyright with &amp;copy; 2026 Alex Johnson.';
          if (code.indexOf('&hearts;') === -1) return 'Use &amp;hearts; for the heart symbol.';
          if (code.indexOf('GitHub') === -1) return 'Add a GitHub link in the footer.';
          if (code.indexOf('LinkedIn') === -1) return 'Add a LinkedIn link in the footer.';
          if (code.indexOf('Twitter') === -1) return 'Add a Twitter link in the footer.';
          return 'Add hr before the footer. Include copyright, heart, and social links.';
        },
        successMsg: '🎉 Excellent! Your Portfolio Website is complete! Hero, about, skills, projects, contact form, testimonials, and footer — a professional portfolio!',
        errorMsg: 'Add a footer with copyright, heart symbol, and GitHub, LinkedIn, Twitter links.',
      },

      /* ===== PROJECT 4: PRODUCT LANDING PAGE (Steps 39—49) ===== */

      {
        id: 39,
        title: 'Start Product Landing Page',
        description: 'Time for your <strong>fourth and final project</strong>: a Product Landing Page! This is one of the most common website types on the internet — used to showcase and sell products.<br><br>▶ <strong>What is a landing page?</strong> A single page designed to promote a product or service. It includes a hero, features, pricing, testimonials, FAQ, and a call to action.<br><br>▶ <strong>Why build a landing page?</strong> Landing pages are everywhere — from startups to Fortune 500 companies. They teach you to structure persuasive, conversion-focused content.<br><br>▶ <strong>Where are they used?</strong> SaaS products, mobile apps, physical products, online courses, event registration — any product or service needs a landing page.',
        task: 'Create the basic HTML structure with the title "Product Landing Page". Include <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, and meta tags.',
        tip: 'Every project, no matter how complex, starts with the same basic HTML skeleton. This becomes second nature with practice.',
        startingCode: '',
        validate: function (code) {
          return code.indexOf('<!DOCTYPE html>') !== -1 && code.indexOf('<html lang="en">') !== -1 && code.indexOf('<title>Product Landing Page</title>') !== -1 && code.indexOf('<body>') !== -1 && code.indexOf('<meta charset=') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<!DOCTYPE html>') === -1) return 'Start with &lt;!DOCTYPE html&gt; at the top.';
          if (code.indexOf('<title>Product Landing Page</title>') === -1) return 'Set the title to "Product Landing Page".';
          if (code.indexOf('<meta charset=') === -1) return 'Add &lt;meta charset="UTF-8"&gt; in the head.';
          return 'Make sure you have DOCTYPE, html, head with title "Product Landing Page", meta tags, and body.';
        },
        successMsg: 'Perfect! Your Product Landing Page project is ready. Let\'s build a compelling hero section next!',
        errorMsg: 'Create a basic HTML structure with title "Product Landing Page" and meta tags.',
      },
      {
        id: 40,
        title: 'Add Viewport Meta for Landing Page',
        description: 'The <strong>viewport meta tag</strong> ensures your landing page looks professional on every device. Most visitors will view your product page on mobile.<br><br>▶ <strong>Why is viewport critical for landing pages?</strong> Over 60% of web traffic comes from mobile devices. A non-responsive landing page loses customers.<br><br>▶ <strong>What does viewport do?</strong> It sets the width to the device width and initial zoom to 1.0, so your page fits perfectly on any screen.<br><br>▶ <strong>Where is this used?</strong> Every professional website, especially landing pages where first impressions drive conversions.',
        task: 'Inside <code>&lt;head&gt;</code>, add <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> if you have not already.',
        tip: 'Without viewport meta, your landing page will look zoomed out and tiny on mobile — a terrible first impression.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<meta name="viewport" content="width=device-width, initial-scale=1.0">') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('name="viewport"') === -1) return 'Add &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;.';
          return 'Make sure the viewport meta tag is inside the &lt;head&gt; section.';
        },
        successMsg: 'Great! Your landing page is now mobile-friendly with the viewport meta tag.',
        errorMsg: 'Add the viewport meta tag inside the head section.',
      },
      {
        id: 41,
        title: 'Create Landing Page Header',
        description: 'The <strong>header</strong> contains the brand logo and navigation links. It appears at the top of every landing page and helps users explore different sections.<br><br>► <strong>What is a page header?</strong> The top section of a website containing the brand name and menu. It is the first thing users see after the navbar.<br><br>► <strong>Why a brand span?</strong> The brand name helps visitors instantly identify your product. It is usually a link back to the homepage.<br><br>► <strong>Where is this used?</strong> Every website has a header with branding and navigation — it is a universal web pattern.',
        task: 'Inside <code>&lt;body&gt;</code>, add <code>&lt;header&gt;&lt;span&gt;ProductName&lt;/span&gt;&lt;nav&gt;&lt;a href="#"&gt;Features&lt;/a&gt;&lt;a href="#"&gt;Pricing&lt;/a&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/nav&gt;&lt;/header&gt;</code>.',
        tip: 'The &lt;header&gt; tag is a semantic HTML5 element. Use it instead of a plain div for the top section of your page.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  \n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<header>') !== -1 && code.indexOf('</header>') !== -1 && code.indexOf('<span>ProductName</span>') !== -1 && code.indexOf('<a href="#">Features</a>') !== -1 && code.indexOf('<a href="#">Pricing</a>') !== -1 && code.indexOf('<a href="#">Contact</a>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<header>') === -1) return 'Add &lt;header&gt; to create the page header section.';
          if (code.indexOf('<span>ProductName</span>') === -1) return 'Add &lt;span&gt;ProductName&lt;/span&gt; as the brand logo.';
          if (code.indexOf('Features') === -1) return 'Add a Features link inside a &lt;nav&gt;.';
          if (code.indexOf('Pricing') === -1) return 'Add a Pricing link inside the nav.';
          if (code.indexOf('Contact') === -1) return 'Add a Contact link inside the nav.';
          return 'Your header should have a ProductName span and nav with Features, Pricing, Contact links.';
        },
        successMsg: 'Great! Your landing page header has branding and navigation.',
        errorMsg: 'Create a <header> with a ProductName span and nav with Features, Pricing, Contact links.',
      },
      {
        id: 42,
        title: 'Add Product Hero Section',
        description: 'The <strong>hero section</strong> is the most important part of a landing page. It must immediately communicate what your product does and why it matters.<br><br>▶ <strong>What is a product hero?</strong> A large banner with your product name, a compelling tagline, and a call-to-action. It sets the tone for the entire page.<br><br>▶ <strong>Why is the hero critical?</strong> Studies show users decide whether to stay or leave within seconds. A strong hero grabs attention and drives engagement.<br><br>▶ <strong>Where are heroes used?</strong> Every landing page, SaaS website, app store page, and product launch site features a hero section.',
        task: 'After the <code>&lt;/header&gt;</code>, add <code>&lt;h1&gt;Amazing Product&lt;/h1&gt;</code> and <code>&lt;p&gt;The simplest way to build amazing websites. No coding experience required.&lt;/p&gt;</code>.',
        tip: 'Your hero heading should clearly state what the product is. The tagline should explain the benefit in one sentence.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  <header>\n    <span>ProductName</span>\n    <nav>\n      <a href="#">Features</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h1>Amazing Product</h1>') !== -1 && code.indexOf('The simplest way to build amazing websites') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h1>Amazing Product</h1>') === -1) return 'Add &lt;h1&gt;Amazing Product&lt;/h1&gt; as the product name.';
          if (code.indexOf('The simplest way to build amazing websites') === -1) return 'Add a tagline paragraph: "The simplest way to build amazing websites. No coding experience required."';
          return 'Your hero should have an h1 product name and a tagline paragraph.';
        },
        successMsg: 'Excellent! Your product hero section grabs attention with a clear heading and tagline.',
        errorMsg: 'Add an h1 with "Amazing Product" and a tagline paragraph after the header.',
      },
      {
        id: 43,
        title: 'Add Product Description',
        description: 'A <strong>product description</strong> explains what the product does in more detail. It follows the hero and reinforces the value proposition.<br><br>📝 <strong>What is a product description?</strong> A paragraph that explains the product\'s key benefits and features. It answers "why should I care?"<br><br>📝 <strong>Why does it matter?</strong> The hero grabs attention, the description converts interest into desire. Together, they persuade visitors to explore further.<br><br>📝 <strong>Where is this used?</strong> App store descriptions, SaaS websites, e-commerce product pages, crowdfunding campaigns — every product needs a compelling description.',
        task: 'After the tagline, add <code>&lt;h2&gt;Why Choose Amazing Product?&lt;/h2&gt;&lt;p&gt;Amazing Product helps you create stunning websites with zero effort. Our drag-and-drop builder, beautiful templates, and powerful features make web design accessible to everyone.&lt;/p&gt;</code>.',
        tip: 'Use the h2 subheading to frame the description. The paragraph should highlight benefits, not just features.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  <header>\n    <span>ProductName</span>\n    <nav>\n      <a href="#">Features</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <h1>Amazing Product</h1>\n  <p>The simplest way to build amazing websites. No coding experience required.</p>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h2>Why Choose Amazing Product?</h2>') !== -1 && code.indexOf('helps you create stunning websites') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h2>Why Choose Amazing Product?</h2>') === -1) return 'Add &lt;h2&gt;Why Choose Amazing Product?&lt;/h2&gt; to introduce the description.';
          if (code.indexOf('helps you create stunning websites') === -1) return 'Add a paragraph describing the product benefits starting with "Amazing Product helps you create stunning websites..."';
          return 'Your description should have an h2 heading and a paragraph about product benefits.';
        },
        successMsg: 'Perfect! Your product description clearly explains the value proposition.',
        errorMsg: 'Add a "Why Choose Amazing Product?" section with an h2 and descriptive paragraph.',
      },
      {
        id: 44,
        title: 'Add Product Features List',
        description: 'A <strong>features list</strong> highlights the key capabilities of your product. Use an ordered list (<code>&lt;ol&gt;</code>) when the order matters or unordered (<code>&lt;ul&gt;</code>) for general features.<br><br>► <strong>What is a features list?</strong> A bulleted list of product capabilities. It helps visitors quickly scan what the product offers.<br><br>► <strong>Why use a list?</strong> Lists are easy to scan. Visitors read feature lists to decide if the product meets their needs.<br><br>► <strong>Where are features listed?</strong> App store descriptions, SaaS feature pages, e-commerce product details, comparison tables — everywhere products are sold.',
        task: 'After the description, add <code>&lt;h2&gt;Features&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;Drag-and-drop website builder&lt;/li&gt;&lt;li&gt;50+ professional templates&lt;/li&gt;&lt;li&gt;Mobile-responsive designs&lt;/li&gt;&lt;li&gt;One-click publishing&lt;/li&gt;&lt;/ul&gt;</code>.',
        tip: 'Keep feature descriptions short and action-oriented. Each feature should start with a benefit-focused phrase.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  <header>\n    <span>ProductName</span>\n    <nav>\n      <a href="#">Features</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <h1>Amazing Product</h1>\n  <p>The simplest way to build amazing websites. No coding experience required.</p>\n  <h2>Why Choose Amazing Product?</h2>\n  <p>Amazing Product helps you create stunning websites with zero effort. Our drag-and-drop builder, beautiful templates, and powerful features make web design accessible to everyone.</p>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h2>Features</h2>') !== -1 && code.indexOf('<li>Drag-and-drop website builder</li>') !== -1 && code.indexOf('<li>50+ professional templates</li>') !== -1 && code.indexOf('<li>Mobile-responsive designs</li>') !== -1 && code.indexOf('<li>One-click publishing</li>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h2>Features</h2>') === -1) return 'Add &lt;h2&gt;Features&lt;/h2&gt; to label the features section.';
          if (code.indexOf('Drag-and-drop website builder') === -1) return 'Add a list item: "Drag-and-drop website builder".';
          if (code.indexOf('50+ professional templates') === -1) return 'Add a list item: "50+ professional templates".';
          if (code.indexOf('Mobile-responsive designs') === -1) return 'Add a list item: "Mobile-responsive designs".';
          if (code.indexOf('One-click publishing') === -1) return 'Add a list item: "One-click publishing".';
          return 'Wrap all features in &lt;ul&gt;...&lt;/ul&gt;.';
        },
        successMsg: 'Great! Your features section clearly lists what the product offers.',
        errorMsg: 'Add a Features section with an h2 and unordered list of four feature items.',
      },
      {
        id: 45,
        title: 'Add Product Showcase Image',
        description: 'A <strong>product image</strong> shows visitors what the product looks like. Visuals are essential for landing pages — they build desire and understanding.<br><br>🖼️ <strong>Why a product image?</strong> People are visual. A picture of your product in action conveys more than paragraphs of text.<br><br>🖼️ <strong>Where should it go?</strong> Near the features section, so visitors see what they read about. The visual reinforces the written benefits.<br><br>🖼️ <strong>Where is this used?</strong> Every product landing page features screenshots, product photos, or demo images to showcase the offering.',
        task: 'After the features list, add <code>&lt;img src="https://picsum.photos/seed/product/600/350" alt="Amazing Product screenshot"&gt;</code>.',
        tip: 'Use a wider image (600x350) that looks like a product screenshot or mockup for a professional appearance.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  <header>\n    <span>ProductName</span>\n    <nav>\n      <a href="#">Features</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <h1>Amazing Product</h1>\n  <p>The simplest way to build amazing websites. No coding experience required.</p>\n  <h2>Why Choose Amazing Product?</h2>\n  <p>Amazing Product helps you create stunning websites with zero effort. Our drag-and-drop builder, beautiful templates, and powerful features make web design accessible to everyone.</p>\n  <h2>Features</h2>\n  <ul>\n    <li>Drag-and-drop website builder</li>\n    <li>50+ professional templates</li>\n    <li>Mobile-responsive designs</li>\n    <li>One-click publishing</li>\n  </ul>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('src="https://picsum.photos/seed/product/600/350"') !== -1 && code.indexOf('alt="Amazing Product screenshot"') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<img') === -1) return 'Add an &lt;img&gt; tag after the features list.';
          if (code.indexOf('src=') === -1) return 'Your &lt;img&gt; needs a src attribute.';
          if (code.indexOf('seed/product') === -1) return 'Use src="https://picsum.photos/seed/product/600/350" for a product image.';
          if (code.indexOf('alt=') === -1) return 'Add alt="Amazing Product screenshot" for accessibility.';
          return 'Add the product image with both src and alt attributes as shown.';
        },
        successMsg: 'Perfect! Your product showcase image helps visitors visualize the product.',
        errorMsg: 'Add a product image with src and alt attributes after the features list.',
      },
      {
        id: 46,
        title: 'Add Pricing Section',
        description: 'A <strong>pricing section</strong> displays your product plans. It typically uses div containers to create card-like layouts for each pricing tier.<br><br>▶ <strong>What is a pricing section?</strong> A list of plans or tiers with prices and features. It helps visitors choose the right option.<br><br>▶ <strong>Why display pricing?</strong> Transparent pricing builds trust. Visitors want to know the cost before committing to learn more.<br><br>▶ <strong>Where is this used?</strong> SaaS products, subscription services, online courses, hosting plans — any product with multiple pricing tiers.',
        task: 'After the image, add <code>&lt;h2&gt;Pricing&lt;/h2&gt;&lt;div&gt;&lt;h3&gt;Basic&lt;/h3&gt;&lt;p&gt;$9/month&lt;/p&gt;&lt;/div&gt;&lt;div&gt;&lt;h3&gt;Pro&lt;/h3&gt;&lt;p&gt;$29/month&lt;/p&gt;&lt;/div&gt;&lt;div&gt;&lt;h3&gt;Enterprise&lt;/h3&gt;&lt;p&gt;$99/month&lt;/p&gt;&lt;/div&gt;</code>.',
        tip: 'Each pricing tier is wrapped in its own div container. This pattern is called "pricing cards" and is used on every subscription website.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  <header>\n    <span>ProductName</span>\n    <nav>\n      <a href="#">Features</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <h1>Amazing Product</h1>\n  <p>The simplest way to build amazing websites. No coding experience required.</p>\n  <h2>Why Choose Amazing Product?</h2>\n  <p>Amazing Product helps you create stunning websites with zero effort. Our drag-and-drop builder, beautiful templates, and powerful features make web design accessible to everyone.</p>\n  <h2>Features</h2>\n  <ul>\n    <li>Drag-and-drop website builder</li>\n    <li>50+ professional templates</li>\n    <li>Mobile-responsive designs</li>\n    <li>One-click publishing</li>\n  </ul>\n  <img src="https://picsum.photos/seed/product/600/350" alt="Amazing Product screenshot">\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h2>Pricing</h2>') !== -1 && code.indexOf('<h3>Basic</h3>') !== -1 && code.indexOf('$9/month') !== -1 && code.indexOf('<h3>Pro</h3>') !== -1 && code.indexOf('$29/month') !== -1 && code.indexOf('<h3>Enterprise</h3>') !== -1 && code.indexOf('$99/month') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h2>Pricing</h2>') === -1) return 'Add &lt;h2&gt;Pricing&lt;/h2&gt; to label the pricing section.';
          if (code.indexOf('Basic') === -1) return 'Add a div with &lt;h3&gt;Basic&lt;/h3&gt; and &lt;p&gt;$9/month&lt;/p&gt;.';
          if (code.indexOf('Pro') === -1) return 'Add a div with &lt;h3&gt;Pro&lt;/h3&gt; and &lt;p&gt;$29/month&lt;/p&gt;.';
          if (code.indexOf('Enterprise') === -1) return 'Add a div with &lt;h3&gt;Enterprise&lt;/h3&gt; and &lt;p&gt;$99/month&lt;/p&gt;.';
          return 'Create three pricing card divs: Basic, Pro, and Enterprise with their prices.';
        },
        successMsg: 'Great! Your pricing section clearly displays three product tiers.',
        errorMsg: 'Add a Pricing section with h2 heading and three pricing card divs (Basic $9, Pro $29, Enterprise $99).',
      },
      {
        id: 47,
        title: 'Add Customer Testimonials',
        description: 'Customer <strong>testimonials</strong> build social proof. When potential customers see positive reviews, they are more likely to trust and buy your product.<br><br>💬 <strong>What is a testimonial?</strong> A quote from a satisfied customer. It typically includes the feedback and the customer\'s name and title.<br><br>💬 <strong>Why include them?</strong> People trust peer reviews more than marketing copy. Testimonials are one of the most persuasive elements on a landing page.<br><br>💬 <strong>Where are they used?</strong> Product pages, SaaS websites, e-commerce stores, course platforms — any site that sells something uses testimonials.',
        task: 'After the pricing section, add <code>&lt;h2&gt;What Our Customers Say&lt;/h2&gt;&lt;blockquote&gt;&lt;p&gt;This product changed the way I build websites!&lt;/p&gt;&lt;cite&gt;— Sarah J., Designer&lt;/cite&gt;&lt;/blockquote&gt;&lt;blockquote&gt;&lt;p&gt;Incredibly easy to use. Highly recommend!&lt;/p&gt;&lt;cite&gt;— Mark T., Developer&lt;/cite&gt;&lt;/blockquote&gt;</code>.',
        tip: 'Use &lt;blockquote&gt; for the testimonial quote and &lt;cite&gt; for the customer name. This is semantically correct HTML.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  <header>\n    <span>ProductName</span>\n    <nav>\n      <a href="#">Features</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <h1>Amazing Product</h1>\n  <p>The simplest way to build amazing websites. No coding experience required.</p>\n  <h2>Why Choose Amazing Product?</h2>\n  <p>Amazing Product helps you create stunning websites with zero effort. Our drag-and-drop builder, beautiful templates, and powerful features make web design accessible to everyone.</p>\n  <h2>Features</h2>\n  <ul>\n    <li>Drag-and-drop website builder</li>\n    <li>50+ professional templates</li>\n    <li>Mobile-responsive designs</li>\n    <li>One-click publishing</li>\n  </ul>\n  <img src="https://picsum.photos/seed/product/600/350" alt="Amazing Product screenshot">\n  <h2>Pricing</h2>\n  <div>\n    <h3>Basic</h3>\n    <p>$9/month</p>\n  </div>\n  <div>\n    <h3>Pro</h3>\n    <p>$29/month</p>\n  </div>\n  <div>\n    <h3>Enterprise</h3>\n    <p>$99/month</p>\n  </div>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<h2>What Our Customers Say</h2>') !== -1 && code.indexOf('changed the way I build websites') !== -1 && code.indexOf('Incredibly easy to use') !== -1 && (code.match(/<blockquote>/g) || []).length >= 2;
        },
        getHint: function (code) {
          if (code.indexOf('<h2>What Our Customers Say</h2>') === -1) return 'Add &lt;h2&gt;What Our Customers Say&lt;/h2&gt; to label the testimonials.';
          if (code.indexOf('changed the way I build websites') === -1) return 'Add a blockquote with the quote "This product changed the way I build websites!"';
          if (code.indexOf('Incredibly easy to use') === -1) return 'Add a second blockquote with "Incredibly easy to use. Highly recommend!"';
          if (code.indexOf('<cite>') === -1) return 'Use &lt;cite&gt; to credit each testimonial\'s author.';
          return 'Add two testimonials with blockquote and cite each one.';
        },
        successMsg: 'Excellent! Your testimonials section builds trust with social proof.',
        errorMsg: 'Add a "What Our Customers Say" section with two blockquote testimonials and cite tags.',
      },
      {
        id: 48,
        title: 'Add FAQ with Details/Summary',
        description: 'An <strong>FAQ section</strong> answers common questions. Use the <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> tags to create expandable questions that save space.<br><br>► <strong>What are &lt;details&gt; and &lt;summary&gt;?</strong> HTML5 elements that create an interactive disclosure widget. Clicking the summary expands or collapses the content.<br><br>► <strong>Why use expandable FAQs?</strong> They save space on the page while keeping all information accessible. Users can click only the questions they care about.<br><br>► <strong>Where are they used?</strong> FAQ pages, product documentation, help centers, landing pages — anywhere you need to present answers without overwhelming the reader.',
        task: 'After the testimonials, add <code>&lt;h2&gt;Frequently Asked Questions&lt;/h2&gt;&lt;details&gt;&lt;summary&gt;Is there a free trial?&lt;/summary&gt;&lt;p&gt;Yes! We offer a 14-day free trial with full access to all features.&lt;/p&gt;&lt;/details&gt;&lt;details&gt;&lt;summary&gt;Can I cancel anytime?&lt;/summary&gt;&lt;p&gt;Absolutely. You can cancel your subscription at any time with no penalties.&lt;/p&gt;&lt;/details&gt;</code>.',
        tip: 'The &lt;summary&gt; tag is the visible question. The content after it (inside &lt;details&gt;) is hidden until the user clicks.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  <header>\n    <span>ProductName</span>\n    <nav>\n      <a href="#">Features</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <h1>Amazing Product</h1>\n  <p>The simplest way to build amazing websites. No coding experience required.</p>\n  <h2>Why Choose Amazing Product?</h2>\n  <p>Amazing Product helps you create stunning websites with zero effort. Our drag-and-drop builder, beautiful templates, and powerful features make web design accessible to everyone.</p>\n  <h2>Features</h2>\n  <ul>\n    <li>Drag-and-drop website builder</li>\n    <li>50+ professional templates</li>\n    <li>Mobile-responsive designs</li>\n    <li>One-click publishing</li>\n  </ul>\n  <img src="https://picsum.photos/seed/product/600/350" alt="Amazing Product screenshot">\n  <h2>Pricing</h2>\n  <div>\n    <h3>Basic</h3>\n    <p>$9/month</p>\n  </div>\n  <div>\n    <h3>Pro</h3>\n    <p>$29/month</p>\n  </div>\n  <div>\n    <h3>Enterprise</h3>\n    <p>$99/month</p>\n  </div>\n  <h2>What Our Customers Say</h2>\n  <blockquote>\n    <p>This product changed the way I build websites!</p>\n    <cite>— Sarah J., Designer</cite>\n  </blockquote>\n  <blockquote>\n    <p>Incredibly easy to use. Highly recommend!</p>\n    <cite>— Mark T., Developer</cite>\n  </blockquote>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<details>') !== -1 && code.indexOf('<summary>Is there a free trial?</summary>') !== -1 && code.indexOf('14-day free trial') !== -1 && code.indexOf('<summary>Can I cancel anytime?</summary>') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<h2>Frequently Asked Questions</h2>') === -1) return 'Add &lt;h2&gt;Frequently Asked Questions&lt;/h2&gt; to label the FAQ.';
          if (code.indexOf('<details>') === -1) return 'Add a &lt;details&gt; tag for the first FAQ item.';
          if (code.indexOf('<summary>Is there a free trial?</summary>') === -1) return 'Add &lt;summary&gt;Is there a free trial?&lt;/summary&gt; as the first question.';
          if (code.indexOf('<summary>Can I cancel anytime?</summary>') === -1) return 'Add a second details element with summary "Can I cancel anytime?"';
          return 'Each FAQ item needs &lt;details&gt; with &lt;summary&gt; and a &lt;p&gt; answer.';
        },
        successMsg: 'Great! Your FAQ section uses interactive details/summary elements for a clean layout.',
        errorMsg: 'Add an FAQ section with two details/summary elements for common questions.',
      },
      {
        id: 49,
        title: 'Add Landing Page Footer',
        description: 'The <strong>footer</strong> ends your landing page with copyright, social links, and a call-to-action. It is the last thing visitors see — make it count.<br><br>▶ <strong>What goes in a landing page footer?</strong> Copyright notice, social media links, secondary navigation, and sometimes a final call-to-action.<br><br>▶ <strong>Why is the footer important?</strong> Visitors who scroll to the bottom are highly engaged. The footer should give them everything they need to take the next step.<br><br>▶ <strong>Where is this used?</strong> Every website has a footer. It is a universal pattern that users expect at the bottom of every page.',
        task: 'At the end of <code>&lt;body&gt;</code>, add <code>&lt;hr&gt;&lt;footer&gt;&lt;p&gt;&amp;copy; 2026 Amazing Product. All rights reserved.&lt;/p&gt;&lt;a href="#"&gt;Twitter&lt;/a&gt; | &lt;a href="#"&gt;Facebook&lt;/a&gt; | &lt;a href="#"&gt;Instagram&lt;/a&gt;&lt;/footer&gt;</code>.',
        tip: 'The footer is the last section of the body. It should include a horizontal rule separator before the footer content.',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Product Landing Page</title>\n</head>\n<body>\n  <header>\n    <span>ProductName</span>\n    <nav>\n      <a href="#">Features</a>\n      <a href="#">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <h1>Amazing Product</h1>\n  <p>The simplest way to build amazing websites. No coding experience required.</p>\n  <h2>Why Choose Amazing Product?</h2>\n  <p>Amazing Product helps you create stunning websites with zero effort. Our drag-and-drop builder, beautiful templates, and powerful features make web design accessible to everyone.</p>\n  <h2>Features</h2>\n  <ul>\n    <li>Drag-and-drop website builder</li>\n    <li>50+ professional templates</li>\n    <li>Mobile-responsive designs</li>\n    <li>One-click publishing</li>\n  </ul>\n  <img src="https://picsum.photos/seed/product/600/350" alt="Amazing Product screenshot">\n  <h2>Pricing</h2>\n  <div>\n    <h3>Basic</h3>\n    <p>$9/month</p>\n  </div>\n  <div>\n    <h3>Pro</h3>\n    <p>$29/month</p>\n  </div>\n  <div>\n    <h3>Enterprise</h3>\n    <p>$99/month</p>\n  </div>\n  <h2>What Our Customers Say</h2>\n  <blockquote>\n    <p>This product changed the way I build websites!</p>\n    <cite>— Sarah J., Designer</cite>\n  </blockquote>\n  <blockquote>\n    <p>Incredibly easy to use. Highly recommend!</p>\n    <cite>— Mark T., Developer</cite>\n  </blockquote>\n  <h2>Frequently Asked Questions</h2>\n  <details>\n    <summary>Is there a free trial?</summary>\n    <p>Yes! We offer a 14-day free trial with full access to all features.</p>\n  </details>\n  <details>\n    <summary>Can I cancel anytime?</summary>\n    <p>Absolutely. You can cancel your subscription at any time with no penalties.</p>\n  </details>\n</body>\n</html>',
        validate: function (code) {
          return code.indexOf('<footer>') !== -1 && code.indexOf('&copy; 2026 Amazing Product') !== -1 && code.indexOf('Twitter') !== -1 && code.indexOf('Facebook') !== -1 && code.indexOf('Instagram') !== -1;
        },
        getHint: function (code) {
          if (code.indexOf('<footer>') === -1) return 'Add &lt;footer&gt; at the bottom of the body.';
          if (code.indexOf('&copy; 2026 Amazing Product') === -1) return 'Add copyright: &amp;copy; 2026 Amazing Product. All rights reserved.';
          if (code.indexOf('Twitter') === -1) return 'Add a Twitter link in the footer.';
          if (code.indexOf('Facebook') === -1) return 'Add a Facebook link in the footer.';
          if (code.indexOf('Instagram') === -1) return 'Add an Instagram link in the footer.';
          return 'Add hr before the footer. Include copyright, and Twitter, Facebook, Instagram links.';
        },
        successMsg: '🎉 Excellent! Your Product Landing Page is complete! Header, hero, description, features, image, pricing, testimonials, FAQ, and footer — a full landing page!',
        errorMsg: 'Add a footer with copyright and Twitter, Facebook, Instagram links.',
      },

      /* ===== FINAL SHOWCASE (Step 50) ===== */

      {
        id: 50,
        title: '🎉 Final Showcase: All 4 Projects Combined',
        description: '🎉 <strong>Congratulations on completing all 4 mini projects!</strong> Now combine everything into one grand showcase page. This demonstrates you can build four different types of websites.<br><br>🏆 <strong>What you built:</strong> Profile Card (Project 1), Blog Layout (Project 2), Portfolio Website (Project 3), and Product Landing Page (Project 4).<br><br>🏆 <strong>Skills mastered:</strong> Document structure, div containers, images, headings, paragraphs, links, buttons, hr, blockquotes, sections, articles, nav, header, footer, forms, inputs, textareas, lists, details/summary, nested structures, and combining multiple components.<br><br>🏆 <strong>What\'s next:</strong> CSS styling will bring your pages to life with colors, fonts, animations, and responsive designs. You have a solid HTML foundation!',
        task: 'Combine ALL 4 projects into ONE page. Wrap each project in its own <code>&lt;section&gt;</code>. Add <code>&lt;hr&gt;</code> separators between sections. Set the title to "My Complete Showcase".',
        tip: 'You now have the HTML skills to build any website structure. CSS (Level 5) will make them beautiful and interactive!',
        startingCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Complete Showcase</title>\n</head>\n<body>\n  <section>\n    <div class="profile-header">\n      <img src="https://picsum.photos/seed/profile/120" alt="Profile photo">\n      <h1>Alex Johnson</h1>\n    </div>\n    <div class="profile-body">\n      <p><strong>Web Developer</strong> & <em>Problem Solver</em>. Building the web, one tag at a time.</p>\n      <span>HTML</span>\n      <span>CSS</span>\n      <span>JS</span>\n      <button>Follow</button>\n      <button>Contact</button>\n      <a href="#">Twitter</a>\n      <a href="#">GitHub</a>\n      <a href="#">LinkedIn</a>\n    </div>\n    <div class="profile-footer">\n      <div>\n        <span>1.2K Followers</span>\n        <span>50+ Projects</span>\n        <span>5 Years</span>\n      </div>\n      <hr>\n      <p>&copy; 2026 Alex Johnson. All rights reserved.</p>\n    </div>\n  </section>\n  <hr>\n  <section>\n    <nav>\n      <span>MyBlog</span>\n      <a href="#">Home</a>\n      <a href="#">About</a>\n      <a href="#">Contact</a>\n    </nav>\n    <h1>Welcome to My Blog</h1>\n    <p>Sharing knowledge and building cool stuff with HTML.</p>\n    <img src="https://picsum.photos/seed/blog/700/300" alt="Blog banner image">\n    <section>\n      <h2>Latest Posts</h2>\n      <article>\n        <h3>Getting Started with HTML</h3>\n        <p>HTML is the foundation of every website. Learn the basics and start building!</p>\n        <a href="#">Read More &rarr;</a>\n      </article>\n      <article>\n        <h3>Why Semantic HTML Matters</h3>\n        <p>Semantic tags improve accessibility, SEO, and code readability. Learn why they matter.</p>\n        <a href="#">Read More &rarr;</a>\n      </article>\n    </section>\n    <blockquote>\n      <p>The best way to predict the future is to create it. — Peter Drucker</p>\n    </blockquote>\n    <div>\n      <img src="https://picsum.photos/seed/author/60" alt="Author photo">\n      <p><strong>Alex Johnson</strong> — Web developer and blogger sharing knowledge with the world.</p>\n    </div>\n    <div>\n      <h3>Categories</h3>\n      <ul>\n        <li><a href="#">HTML</a></li>\n        <li><a href="#">CSS</a></li>\n        <li><a href="#">JavaScript</a></li>\n      </ul>\n    </div>\n    <hr>\n    <footer>\n      <p>&copy; 2026 My Blog. All rights reserved.</p>\n      <p><a href="#">Privacy</a> | <a href="#">Terms</a></p>\n    </footer>\n  </section>\n  <hr>\n  <section>\n    <h1>I\'m Alex Johnson</h1>\n    <p>A passionate <strong>Web Developer</strong> creating modern, accessible websites.</p>\n    <img src="https://picsum.photos/seed/portfolio/150" alt="Alex Johnson profile photo">\n    <h2>About Me</h2>\n    <p>I\'m a self-taught web developer who loves turning ideas into reality through clean HTML code. I believe every website should be accessible, fast, and beautiful.</p>\n    <h2>My Skills</h2>\n    <ul>\n      <li>HTML5</li>\n      <li>CSS3</li>\n      <li>JavaScript</li>\n      <li>Responsive Design</li>\n    </ul>\n    <section>\n      <h2>My Projects</h2>\n      <article>\n        <h3>Personal Profile Card</h3>\n        <p>A responsive profile card built with semantic HTML.</p>\n      </article>\n      <article>\n        <h3>Simple Blog Layout</h3>\n        <p>A complete blog website with semantic HTML.</p>\n      </article>\n    </section>\n    <h2>Contact Me</h2>\n    <form>\n      <label>Name <input placeholder="Your name"></label>\n      <label>Email <input type="email" placeholder="Your email"></label>\n      <label>Message <textarea placeholder="Your message"></textarea></label>\n      <button type="submit">Send Message</button>\n    </form>\n    <h2>Testimonials</h2>\n    <blockquote><p>Alex built an amazing website.</p><cite>— Sarah Johnson, CEO</cite></blockquote>\n    <blockquote><p>Great attention to detail.</p><cite>— Mike Chen, Developer</cite></blockquote>\n    <hr>\n    <footer>\n      <p>&copy; 2026 Alex Johnson. Built with &hearts; using HTML.</p>\n      <a href="#">GitHub</a> | <a href="#">LinkedIn</a> | <a href="#">Twitter</a>\n    </footer>\n  </section>\n  <hr>\n  <section>\n    <header>\n      <span>ProductName</span>\n      <nav>\n        <a href="#">Features</a>\n        <a href="#">Pricing</a>\n        <a href="#">Contact</a>\n      </nav>\n    </header>\n    <h1>Amazing Product</h1>\n    <p>The simplest way to build amazing websites. No coding experience required.</p>\n    <h2>Why Choose Amazing Product?</h2>\n    <p>Amazing Product helps you create stunning websites with zero effort.</p>\n    <h2>Features</h2>\n    <ul>\n      <li>Drag-and-drop website builder</li>\n      <li>50+ professional templates</li>\n      <li>Mobile-responsive designs</li>\n      <li>One-click publishing</li>\n    </ul>\n    <img src="https://picsum.photos/seed/product/600/350" alt="Amazing Product screenshot">\n    <h2>Pricing</h2>\n    <div><h3>Basic</h3><p>$9/month</p></div>\n    <div><h3>Pro</h3><p>$29/month</p></div>\n    <div><h3>Enterprise</h3><p>$99/month</p></div>\n    <h2>What Our Customers Say</h2>\n    <blockquote><p>This product changed the way I build websites!</p><cite>— Sarah J., Designer</cite></blockquote>\n    <blockquote><p>Incredibly easy to use. Highly recommend!</p><cite>— Mark T., Developer</cite></blockquote>\n    <h2>Frequently Asked Questions</h2>\n    <details><summary>Is there a free trial?</summary><p>Yes! We offer a 14-day free trial.</p></details>\n    <details><summary>Can I cancel anytime?</summary><p>Absolutely. Cancel anytime with no penalties.</p></details>\n    <hr>\n    <footer>\n      <p>&copy; 2026 Amazing Product. All rights reserved.</p>\n      <a href="#">Twitter</a> | <a href="#">Facebook</a> | <a href="#">Instagram</a>\n    </footer>\n  </section>\n</body>\n</html>',
        validate: function (code) {
          return (code.match(/<section>/g) || []).length >= 4 && code.indexOf('Alex Johnson') !== -1 && code.indexOf('Welcome to My Blog') !== -1 && code.indexOf('My Skills') !== -1 && code.indexOf('Amazing Product') !== -1;
        },
        getHint: function (code) {
          if ((code.match(/<section>/g) || []).length < 4) return 'You need at least 4 &lt;section&gt; tags — one for each project.';
          if (code.indexOf('Alex Johnson') === -1) return 'Make sure the Profile Card content (with Alex Johnson) is in the first section.';
          if (code.indexOf('Welcome to My Blog') === -1) return 'Make sure the Blog content (with "Welcome to My Blog") is in the second section.';
          if (code.indexOf('My Skills') === -1) return 'Make sure the Portfolio content (with "My Skills") is in the third section.';
          if (code.indexOf('Amazing Product') === -1) return 'Make sure the Product Landing Page content (with "Amazing Product") is in the fourth section.';
          return 'Combine all 4 projects into 4 &lt;section&gt; tags with &lt;hr&gt; separators.';
        },
        successMsg: '🎉🎉 AMAZING! You completed ALL 4 mini projects and combined them into one grand showcase! You are a real HTML developer! 🎉🎉',
        errorMsg: 'Combine all 4 projects into sections with hr separators.',
      },
    ],

        'css-1': [
      {
        id: 1,
        title: "Create Your Portfolio Heading",
        description: "<strong>Kick off your portfolio</strong> by adding an <code>&lt;h1&gt;</code> element with the text \"My Portfolio\". The <code>&lt;h1&gt;</code> tag represents the most important heading on your page and helps search engines understand your site's main topic. Every website you visit uses heading tags (<code>h1</code>–<code>h6</code>) to structure content clearly for both users and screen readers.",
        task: "Inside the <code>&lt;body&gt;</code>, add an <code>&lt;h1&gt;</code> element with the text <strong>My Portfolio</strong>.",
        tip: "Always use exactly one <code>&lt;h1&gt;</code> per page for SEO best practices.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n</head>\n<body>\n</body>\n</html>",
        validate: function(code) { return code.indexOf("<h1") !== -1 && code.indexOf("My Portfolio") !== -1; },
        getHint: function() { return "Add this inside the body: <h1>My Portfolio</h1>"; },
        successMsg: "Perfect! Your portfolio now has a clear heading.",
        errorMsg: ""
      },
      {
        id: 2,
        title: "Add a Welcome Message",
        description: "Add a <code>&lt;p&gt;</code> (paragraph) tag beneath your heading with a warm welcome message like \"Welcome to my personal portfolio!\". Paragraphs are the <strong>building blocks of web content</strong> and are used everywhere — from blog posts to product descriptions — to present readable text to visitors.",
        task: "Below the <code>&lt;h1&gt;</code>, add a <code>&lt;p&gt;</code> with welcome text.",
        tip: "Keep your welcome message short and friendly — first impressions matter!",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n</head>\n<body>\n\n  <h1>My Portfolio</h1></body>\n</html>",
        validate: function(code) { return code.indexOf("Welcome to my personal portfolio") !== -1; },
        getHint: function() { return "After the heading, add a paragraph with a welcome message."; },
        successMsg: "Great! Now your portfolio has a heading and welcoming text.",
        errorMsg: ""
      },
      {
        id: 3,
        title: "Add Your Profile Image",
        description: "Insert an <code>&lt;img&gt;</code> tag to display your profile picture. The <code>src</code> attribute specifies the image file path or URL, while the <code>alt</code> attribute provides <strong>alternative text for accessibility</strong> and shows when the image fails to load. Real-world sites like LinkedIn and GitHub use profile images to build trust and personal connection.",
        task: "Before the <code>&lt;h1&gt;</code>, add an <code>&lt;img&gt;</code> tag with <code>src=\"profile.jpg\"</code> and <code>alt=\"Profile Photo\"</code>.",
        tip: "Always include a descriptive <code>alt</code> attribute — it helps screen readers and improves SEO.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n</head>\n<body>\n\n  <h1>My Portfolio</h1>\n  <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p></body>\n</html>",
        validate: function(code) { return code.indexOf("<img") !== -1 && code.indexOf("profile.jpg") !== -1 && code.indexOf("Profile Photo") !== -1; },
        getHint: function() { return "Add <img src=\"profile.jpg\" alt=\"Profile Photo\"> before the h1."; },
        successMsg: "Excellent! A profile image makes your portfolio feel personal.",
        errorMsg: ""
      },
      {
        id: 4,
        title: "Add a Navigation Menu",
        description: "Create a <code>&lt;nav&gt;</code> element containing anchor (<code>&lt;a&gt;</code>) links for Home, About, Skills, and Contact. The <code>&lt;nav&gt;</code> tag <strong>semantically marks navigation</strong>, making your site more accessible and machine-readable. Every multi-page site uses navigation menus to help users quickly jump between sections.",
        task: "Before the image, add a <code>&lt;nav&gt;</code> containing links: Home, About, Skills, Contact.",
        tip: "Use <code>href=\"#section-id\"</code> to link to sections on the same page.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n</head>\n<body>\n\n  <h1>My Portfolio</h1>\n  <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  <img src=\"profile.jpg\" alt=\"Profile Photo\"></body>\n</html>",
        validate: function(code) { return code.indexOf("<nav") !== -1 && code.indexOf("Home") !== -1 && code.indexOf("About") !== -1 && code.indexOf("Skills") !== -1 && code.indexOf("Contact") !== -1; },
        getHint: function() { return "Add <nav> with links: Home, About, Skills, Contact."; },
        successMsg: "Awesome! Your portfolio now has a navigation menu.",
        errorMsg: ""
      },
      {
        id: 5,
        title: "Organize Content with Sections",
        description: "Wrap your home content in a <code>&lt;section id=\"home\"&gt;</code> element. The <code>&lt;section&gt;</code> tag <strong>groups related content thematically</strong>, improving both readability and accessibility. Large sites like GitHub and Dev.to use sections to organize their pages into logical blocks that are easier to style and navigate.",
        task: "Wrap the image, heading, and paragraph inside <code>&lt;section id=\"home\"&gt;</code>.",
        tip: "Use <code>id</code> attributes on your sections — they act as anchor targets for navigation links.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n</head>\n<body>\n\n  <h1>My Portfolio</h1>\n  <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  <img src=\"profile.jpg\" alt=\"Profile Photo\">\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav></body>\n</html>",
        validate: function(code) { return code.indexOf("<section") !== -1 && code.indexOf('id="home"') !== -1; },
        getHint: function() { return "Wrap img, h1, p inside: <section id=\"home\">...</section>"; },
        successMsg: "Perfect! Your content is now organized in a section.",
        errorMsg: ""
      },
      {
        id: 6,
        title: "Add an About Me Section",
        description: "Add a <code>&lt;section id=\"about\"&gt;</code> with an <code>&lt;h2&gt;</code> heading and a paragraph telling visitors about yourself. The <code>&lt;h2&gt;</code> tag creates a <strong>second-level heading</strong>, which helps establish a clear content hierarchy. Portfolio sites, resumes, and personal blogs all use \"About\" sections to introduce who you are and what you do.",
        task: "Below the home section, add <code>&lt;section id=\"about\"&gt;</code> with h2 heading and paragraph.",
        tip: "Write your About paragraph in first-person — it feels more personal and engaging.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf('id="about"') !== -1 && code.indexOf("About Me") !== -1; },
        getHint: function() { return "Add: <section id=\"about\"><h2>About Me</h2><p>...</p></section>"; },
        successMsg: "Great! Your portfolio now has Home and About sections.",
        errorMsg: ""
      },
      {
        id: 7,
        title: "Add CSS — Change the Background",
        description: "Add a <code>&lt;style&gt;</code> tag in your <code>&lt;head&gt;</code> and set <code>body { background-color: #f0f4f8; }</code>. CSS (Cascading Style Sheets) controls <strong>every visual aspect of your page</strong>, starting with the background. Companies use background colors to establish brand identity — think of Facebook's light gray or Stripe's signature blue backdrop.",
        task: "Inside <code>&lt;head&gt;</code>, add <code>&lt;style&gt;</code> with: <code>body { background-color: #f0f4f8; }</code>.",
        tip: "The <code>&lt;style&gt;</code> tag belongs inside the <code>&lt;head&gt;</code> of your HTML document.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section>\n  <section id=\"about\">\n    <h2>About Me</h2>\n    <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("background-color") !== -1; },
        getHint: function() { return "Add: <style>body { background-color: #f0f4f8; }</style>"; },
        successMsg: "Excellent! You just wrote your first CSS!",
        errorMsg: ""
      },
      {
        id: 8,
        title: "Choose a Font for Your Page",
        description: "Add <code>font-family: Arial, Helvetica, sans-serif;</code> to your <code>body</code> selector. The <code>font-family</code> property defines <strong>which typeface your text uses</strong>, and providing fallback fonts ensures your page looks good even when a specific font isn't available. Google, Medium, and YouTube all carefully choose font stacks for readability and brand consistency.",
        task: "In your CSS, add <code>font-family: Arial, Helvetica, sans-serif;</code> inside the body rule.",
        tip: "Always list a generic fallback like <code>serif</code> or <code>sans-serif</code> at the end of your font stack.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section>\n  <section id=\"about\">\n    <h2>About Me</h2>\n    <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("font-family") !== -1; },
        getHint: function() { return "Add: font-family: Arial, Helvetica, sans-serif; to body."; },
        successMsg: "Nice! Your portfolio now uses a clean, readable font.",
        errorMsg: ""
      },
      {
        id: 9,
        title: "Add Color to Your Heading",
        description: "Set <code>color: #2c3e50;</code> on your <code>h1</code> selector to change the heading text to a dark navy-blue shade. The <code>color</code> property controls text color and is <strong>fundamental to visual hierarchy and branding</strong>. News sites like The New York Times use dark headings to create contrast and draw attention to headlines.",
        task: "Add a CSS rule for <code>h1</code> with <code>color: #2c3e50;</code>.",
        tip: "Use a <strong>color contrast checker</strong> to ensure your text is readable against the background.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section>\n  <section id=\"about\">\n    <h2>About Me</h2>\n    <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("color: #2c3e50") !== -1; },
        getHint: function() { return "Add: h1 { color: #2c3e50; }"; },
        successMsg: "Beautiful! Your heading now has a rich, professional color.",
        errorMsg: ""
      },
      {
        id: 10,
        title: "Size and Center Your Heading",
        description: "Add <code>font-size: 36px;</code> and <code>text-align: center;</code> to your <code>h1</code> selector. The <code>font-size</code> property <strong>controls the prominence of text</strong>, while <code>text-align</code> determines horizontal alignment. Centered headings are a common design pattern used on landing pages, portfolios, and splash screens to create a strong focal point.",
        task: "Add <code>font-size: 36px;</code> and <code>text-align: center;</code> to your h1 CSS rule.",
        tip: "Pixels (<code>px</code>) are absolute units — use them for consistent sizing across devices.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section>\n  <section id=\"about\">\n    <h2>About Me</h2>\n    <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("font-size: 36px") !== -1 && code.indexOf("text-align: center") !== -1; },
        getHint: function() { return "Add: font-size: 36px; text-align: center; to h1."; },
        successMsg: "Perfect! Your heading is larger and centered.",
        errorMsg: ""
      },
      {
        id: 11,
        title: "Improve Paragraph Readability",
        description: "Apply <code>font-size: 18px;</code> and <code>line-height: 1.6;</code> to your <code>p</code> selector. The <code>line-height</code> property adds <strong>vertical space between lines of text</strong>, dramatically improving readability. Medium, blogs, and long-form content sites use generous line heights to prevent text from looking cramped and to reduce eye strain.",
        task: "Add CSS for <code>p</code>: <code>font-size: 18px;</code> and <code>line-height: 1.6;</code>.",
        tip: "A <code>line-height</code> between 1.5 and 1.8 is considered optimal for body text readability.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section>\n  <section id=\"about\">\n    <h2>About Me</h2>\n    <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("font-size: 18px") !== -1 && code.indexOf("line-height: 1.6") !== -1; },
        getHint: function() { return "Add: p { font-size: 18px; line-height: 1.6; }"; },
        successMsg: "Great! Your paragraphs are now comfortable to read.",
        errorMsg: ""
      },
      {
        id: 12,
        title: "Add Space Around Elements",
        description: "Set <code>body { margin: 0; padding: 20px; }</code> to remove the browser's default spacing and add breathing room. The <code>margin</code> property controls space <strong>outside</strong> an element, while <code>padding</code> controls space <strong>inside</strong>. Every professional site resets margins first to ensure consistent rendering across different browsers.",
        task: "Update body CSS: set <code>margin: 0;</code> and <code>padding: 20px;</code>.",
        tip: "Browsers add default margins to <code>&lt;body&gt;</code> — resetting them gives you full control.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section>\n  <section id=\"about\">\n    <h2>About Me</h2>\n    <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("margin: 0") !== -1 && code.indexOf("padding: 20px") !== -1; },
        getHint: function() { return "In body rule, add: margin: 0; padding: 20px;"; },
        successMsg: "Excellent! Your content has breathing room.",
        errorMsg: ""
      },
      {
        id: 13,
        title: "Style Section Headings",
        description: "Style your <code>h2</code> elements with <code>color: #2c3e50;</code> and <code>font-size: 28px;</code>. Keeping a <strong>consistent typographic scale</strong> across headings creates a professional, cohesive look. Sites like Airbnb and Spotify use carefully sized headings to guide users through their content hierarchy.",
        task: "Add CSS for <code>h2</code>: <code>color: #34495e;</code> and <code>font-size: 28px;</code>.",
        tip: "Match your <code>h2</code> color to the <code>h1</code> color for a unified design system.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section>\n  <section id=\"about\">\n    <h2>About Me</h2>\n    <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("h2") !== -1 && code.indexOf("color: #34495e") !== -1 && code.indexOf("font-size: 28px") !== -1; },
        getHint: function() { return "Add: h2 { color: #34495e; font-size: 28px; }"; },
        successMsg: "Perfect! Section headings now have clear visual style.",
        errorMsg: ""
      },
      {
        id: 14,
        title: "Add a Container for Layout",
        description: "Wrap your page content in a <code>&lt;div class=\"container\"&gt;</code> and style it with <code>max-width: 900px; margin: 0 auto;</code>. The <code>max-width</code> limits how wide your content stretches on large screens, and <code>margin: 0 auto</code> <strong>centers the entire container horizontally</strong>. This is the web's most common layout pattern — used by Reddit, Dev.to, and thousands of other sites.",
        task: "Wrap content in <code>&lt;div class=\"container\"&gt;</code>. Add CSS: <code>.container { max-width: 900px; margin: 0 auto; }</code>.",
        tip: "The <code>auto</code> value in <code>margin: 0 auto</code> tells the browser to split remaining space equally on both sides.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }  </style>\n</head>\n<body>\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Skills</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n  <section id=\"home\">\n    <img src=\"profile.jpg\" alt=\"Profile Photo\">\n    <h1>My Portfolio</h1>\n    <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n  </section>\n  <section id=\"about\">\n    <h2>About Me</h2>\n    <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf('class="container"') !== -1 && code.indexOf("max-width: 900px") !== -1 && code.indexOf("margin: 0 auto") !== -1; },
        getHint: function() { return "Add <div class=\"container\"> and CSS: .container { max-width: 900px; margin: 0 auto; }"; },
        successMsg: "Excellent! Your content is centered and has max-width.",
        errorMsg: ""
      },
      {
        id: 15,
        title: "Style the Navigation Bar",
        description: "Style your <code>nav</code> with <code>background: white; padding: 15px; text-align: center; border-radius: 8px;</code>. The <code>border-radius</code> property <strong>rounds the corners</strong> of an element, giving it a modern, polished appearance. Navigation bars are the most-used UI component on the web, and rounded corners have become a hallmark of contemporary design.",
        task: "Add CSS for <code>nav</code>: background, padding, text-align, border-radius.",
        tip: "Border-radius values between <code>6px</code> and <code>12px</code> give a subtle modern look without being overly round.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div></body>\n</html>",
        validate: function(code) { return code.indexOf("nav") !== -1 && code.indexOf("background: white") !== -1 && code.indexOf("padding:") !== -1 && code.indexOf("border-radius") !== -1; },
        getHint: function() { return "Add: nav { background: white; padding: 15px; text-align: center; border-radius: 8px; }"; },
        successMsg: "Your nav bar looks clean and professional!",
        errorMsg: ""
      },
      {
        id: 16,
        title: "Style the Navigation Links",
        description: "Target <code>nav a</code> with <code>text-decoration: none; color: #2c3e50; margin: 0 15px; font-weight: bold;</code>. The <code>text-decoration: none</code> removes the default underline from links, while <code>font-weight: bold</code> gives them a <strong>bold appearance</strong>. This clean link style is the industry standard — used by GitHub, Twitter, and virtually every modern web app.",
        task: "Add CSS for <code>nav a</code>: text-decoration, color, margin, font-weight.",
        tip: "Use <code>font-weight: bold</code> (or 700) for nav links to make them stand out against body text.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div></body>\n</html>",
        validate: function(code) { return code.indexOf("nav a") !== -1 && code.indexOf("text-decoration: none") !== -1 && code.indexOf("color: #2c3e50") !== -1 && code.indexOf("margin:") !== -1; },
        getHint: function() { return "Add: nav a { text-decoration: none; color: #2c3e50; margin: 0 15px; font-weight: bold; }"; },
        successMsg: "Your nav links look like a real website menu!",
        errorMsg: ""
      },
      {
        id: 17,
        title: "Style the Profile Image",
        description: "Add <code>img { width: 150px; height: 150px; border-radius: 50%; display: block; margin: 0 auto 20px; }</code>. Setting <code>border-radius: 50%</code> on a square image <strong>turns it into a perfect circle</strong> — one of the most popular profile picture styles on the web. LinkedIn, Twitter, and Instagram all use circular profile photos for a friendly, uniform appearance.",
        task: "Add CSS for <code>img</code>: width, height, border-radius: 50%, display: block, margin.",
        tip: "Set <code>display: block; margin: 0 auto;</code> to center the image horizontally within its container.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div></body>\n</html>",
        validate: function(code) { return code.indexOf("img") !== -1 && code.indexOf("border-radius: 50%") !== -1 && code.indexOf("width: 150px") !== -1; },
        getHint: function() { return "Add: img { width: 150px; height: 150px; border-radius: 50%; display: block; margin: 0 auto 20px; }"; },
        successMsg: "Your profile photo is now a beautiful circle!",
        errorMsg: ""
      },
      {
        id: 18,
        title: "Add Background to Sections",
        description: "Target your sections with <code>background: white; padding: 30px; border-radius: 12px; margin-bottom: 20px;</code>. White section backgrounds on a colored page background <strong>create visual cards</strong> that separate content areas. This card-based layout is used everywhere — from Google's Material Design to Trello's boards — because it creates clear content boundaries.",
        task: "Add CSS for <code>section</code>: background: white, padding, margin-bottom, border-radius.",
        tip: "Add <code>margin-bottom</code> to sections so they don't stick together — spacing improves readability.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div></body>\n</html>",
        validate: function(code) { return code.indexOf("section") !== -1 && code.indexOf("background: white") !== -1 && code.indexOf("padding: 30px") !== -1 && code.indexOf("border-radius: 12px") !== -1; },
        getHint: function() { return "Add: section { background: white; padding: 30px; margin-bottom: 20px; border-radius: 12px; }"; },
        successMsg: "Your sections look like clean white cards!",
        errorMsg: ""
      },
      {
        id: 19,
        title: "Add Depth with Box Shadow",
        description: "Add <code>box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);</code> to your sections. The <code>box-shadow</code> property <strong>adds depth by casting a shadow</strong> behind an element, making it appear to float above the page. This subtle 3D effect is a cornerstone of modern UI design and is used extensively by Stripe, Notion, and Material Design components.",
        task: "Add <code>box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);</code> to your section CSS.",
        tip: "Use <code>rgba()</code> for shadows — the last value (alpha) controls transparency, keeping shadows soft and natural.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div></body>\n</html>",
        validate: function(code) { return code.indexOf("box-shadow") !== -1; },
        getHint: function() { return "Add: box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); to section."; },
        successMsg: "Your sections now have beautiful depth!",
        errorMsg: ""
      },
      {
        id: 20,
        title: "Add an Action Button",
        description: "Add a <code>&lt;button&gt;</code> with the text \"Learn More About Me\" inside your home section. The <code>&lt;button&gt;</code> element <strong>represents a clickable interactive control</strong> that users can click to trigger an action. Buttons are the most essential interactive element on the web — used for submitting forms, triggering modals, and navigating across every type of website.",
        task: "Inside #home section (after paragraph), add a button: <strong>Learn More About Me</strong>.",
        tip: "Use descriptive button text like \"Learn More\" instead of vague text like \"Click Here\" — it's better for accessibility.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div></body>\n</html>",
        validate: function(code) { return code.indexOf("<button") !== -1 && code.indexOf("Learn More About Me") !== -1; },
        getHint: function() { return "Add: <button>Learn More About Me</button> in the home section."; },
        successMsg: "Great! Your portfolio now has an action button.",
        errorMsg: ""
      },
      {
        id: 21,
        title: "Style Your Button",
        description: "Style your button with <code>background: #3498db; color: white; padding: 12px 30px; border: none; border-radius: 25px; font-size: 16px; cursor: pointer;</code>. The <code>cursor: pointer</code> property <strong>changes the mouse cursor to a hand icon</strong>, signaling interactivity. These styles define the modern button aesthetic — seen on call-to-action buttons across Amazon, Spotify, and YouTube.",
        task: "Add CSS for <code>button</code>: background, color, border, padding, border-radius, font-size, cursor.",
        tip: "Add <code>border: none</code> to buttons to remove the default browser border that clashes with custom styles.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button></body>\n</html>",
        validate: function(code) { return code.indexOf("background: #3498db") !== -1 && code.indexOf("color: white") !== -1 && code.indexOf("border: none") !== -1 && code.indexOf("border-radius:") !== -1; },
        getHint: function() { return "Add button { background: #3498db; color: white; border: none; padding: 12px 30px; border-radius: 25px; font-size: 16px; cursor: pointer; }"; },
        successMsg: "Your button looks modern and clickable!",
        errorMsg: ""
      },
      {
        id: 22,
        title: "Add Button Hover Effect",
        description: "Add a <code>button:hover</code> rule with <code>background: #2980b9;</code>. The <code>:hover</code> pseudo-class <strong>applies styles when the user hovers their cursor</strong> over an element. Hover effects provide visual feedback that an element is interactive — this is a fundamental UX principle used by every major website to improve user experience.",
        task: "Add CSS: <code>button:hover { background: #2980b9; }</code>.",
        tip: "Make the hover color slightly darker than the default for a natural press-down visual effect.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button></body>\n</html>",
        validate: function(code) { return code.indexOf("button:hover") !== -1; },
        getHint: function() { return "Add: button:hover { background: #2980b9; }"; },
        successMsg: "Amazing! Your button responds to hover.",
        errorMsg: ""
      },
      {
        id: 23,
        title: "Add a Border to Your Image",
        description: "Add <code>border: 4px solid #3498db;</code> to your image selector. The <code>border</code> property <strong>adds a decorative outline around an element</strong>, and applying it to your profile image creates a framed, polished look. Borders are used in profile avatars, product cards, and certificates to draw attention and define boundaries.",
        task: "Add <code>border: 4px solid #3498db;</code> to your img CSS rule.",
        tip: "Match the border color to your button's background color for a cohesive design palette.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button></body>\n</html>",
        validate: function(code) { return code.indexOf("border: 4px solid") !== -1; },
        getHint: function() { return "Add: border: 4px solid #3498db; to img."; },
        successMsg: "Your profile image has a stylish frame!",
        errorMsg: ""
      },
      {
        id: 24,
        title: "Add a Skills Section",
        description: "Add a <code>&lt;section id=\"skills\"&gt;</code> containing <code>&lt;div class=\"skill\"&gt;</code> elements for HTML, CSS, JavaScript, and Design. Grouping related content in a skills section <strong>showcases your technical abilities</strong> in a structured way. Portfolio and resume websites universally use skills sections to give recruiters a quick overview of a candidate's expertise.",
        task: "Add section#skills with h2 \"My Skills\" and skill divs for HTML, CSS, JavaScript, Design.",
        tip: "Use a <code>&lt;div&gt;</code> with a class for each skill — classes let you style multiple elements identically.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button></body>\n</html>",
        validate: function(code) { return code.indexOf('id="skills"') !== -1 && code.indexOf('class="skill"') !== -1; },
        getHint: function() { return "Add Skills section with skill tags."; },
        successMsg: "Your portfolio now shows off your skills!",
        errorMsg: ""
      },
      {
        id: 25,
        title: "Style Skills as Badges",
        description: "Style <code>.skill</code> with <code>display: inline-block; background: #e8f4fd; color: #3498db; padding: 8px 20px; margin: 5px; border-radius: 20px; font-weight: bold;</code>. The <code>border-radius: 20px</code> creates <strong>pill-shaped badges</strong>, a popular UI pattern for tags and skill labels. GitHub uses pill badges for repository topics, and many job boards display skill tags this way.",
        task: "Add CSS for <code>.skill</code>: inline-block, background, color, padding, margin, border-radius, font-weight.",
        tip: "Use <code>display: inline-block</code> so badges sit side-by-side while still respecting padding and margins.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf(".skill") !== -1 && code.indexOf("display: inline-block") !== -1 && code.indexOf("border-radius: 20px") !== -1; },
        getHint: function() { return "Add: .skill { display: inline-block; background: #e8f4fd; color: #3498db; padding: 8px 20px; margin: 5px; border-radius: 20px; font-weight: bold; }"; },
        successMsg: "Your skill badges look professional!",
        errorMsg: ""
      },
      {
        id: 26,
        title: "Add a Projects Section",
        description: "Add a <code>&lt;section id=\"projects\"&gt;</code> with <code>&lt;div class=\"project-card\"&gt;</code> elements containing project titles and descriptions. Project cards <strong>present your work in a scannable, visual format</strong> that lets visitors quickly assess your experience. Dribbble, Behance, and every portfolio site use project cards to transform bullet-point resumes into engaging visual stories.",
        task: "Add section#projects with h2 and two project-card divs (each with h3 and p).",
        tip: "Start with 2–3 placeholder project cards — you can replace the content with real projects later.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf('id="projects"') !== -1 && code.indexOf('class="project-card"') !== -1; },
        getHint: function() { return "Add Projects section with project cards."; },
        successMsg: "Your portfolio now showcases your work!",
        errorMsg: ""
      },
      {
        id: 27,
        title: "Style Project Cards",
        description: "Style <code>.project-card</code> with <code>background: #f8fafc; padding: 20px; border-left: 4px solid #3498db; border-radius: 8px; margin-bottom: 15px;</code>. The <code>border-left</code> property <strong>adds a colored accent bar</strong> on one side, a common design pattern used in cards, quotes, and notification panels. Medium and Dev.to use left-border accents to highlight featured or related content.",
        task: "Add CSS for <code>.project-card</code>: background, padding, border-radius, margin, border-left.",
        tip: "A colored left border acts as an accent line — it's a simple way to make cards feel premium without extra graphics.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf(".project-card") !== -1 && code.indexOf("background: #f8fafc") !== -1 && code.indexOf("border-left") !== -1; },
        getHint: function() { return "Add .project-card { background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #3498db; }"; },
        successMsg: "Your project cards look professional!",
        errorMsg: ""
      },
      {
        id: 28,
        title: "Style Project Card Titles",
        description: "Add <code>.project-card h3 { margin-top: 0; color: #2c3e50; }</code> to remove excess space above project titles. The <code>margin-top: 0</code> <strong>eliminates unwanted spacing</strong> that browsers add to headings by default. This small but important detail is used by professional UI designers to ensure consistent spacing inside cards and containers.",
        task: "Add CSS for <code>.project-card h3</code>: margin-top: 0, color #2c3e50.",
        tip: "Headings inside cards with <code>margin-top: 0</code> align perfectly with the card's top padding.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf(".project-card h3") !== -1 && code.indexOf("margin-top: 0") !== -1; },
        getHint: function() { return "Add: .project-card h3 { margin-top: 0; color: #2c3e50; }"; },
        successMsg: "Your card titles look clean and aligned!",
        errorMsg: ""
      },
      {
        id: 29,
        title: "Add a Contact Form",
        description: "Add a <code>&lt;section id=\"contact\"&gt;</code> with a <code>&lt;form&gt;</code> containing <code>&lt;input&gt;</code> fields for name and email, and a <code>&lt;textarea&gt;</code> for messages. Forms are <strong>the primary way users send data to a server</strong> — they power contact pages, sign-ups, checkouts, and search bars across the entire web.",
        task: "Add section#contact with h2, form containing inputs and textarea.",
        tip: "Use <code>placeholder</code> attributes on inputs to show example text — it guides users without needing extra labels.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf('id="contact"') !== -1 && code.indexOf("<form") !== -1; },
        getHint: function() { return "Add: <section id=\"contact\"><h2>Contact Me</h2><form>...</form></section>"; },
        successMsg: "Your portfolio now has a contact form!",
        errorMsg: ""
      },
      {
        id: 30,
        title: "Style Form Inputs",
        description: "Style <code>input, textarea</code> with <code>width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; margin-bottom: 15px;</code>. The <code>width: 100%</code> property <strong>makes form fields stretch to fill their container</strong>, creating a clean, uniform look. This full-width form styling is the standard across modern web applications and mobile-friendly designs.",
        task: "Add CSS for <code>input, textarea</code>: width, padding, border, border-radius, font-size, margin.",
        tip: "Always use <code>width: 100%</code> on form inputs so they fill their container and look consistent.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("input, textarea") !== -1 && code.indexOf("width: 100%") !== -1 && code.indexOf("border: 1px solid") !== -1; },
        getHint: function() { return "Add: input, textarea { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; margin-bottom: 15px; }"; },
        successMsg: "Your form inputs look clean and professional!",
        errorMsg: ""
      },
      {
        id: 31,
        title: "Style the Form Submit Button",
        description: "Add <code>button[type=\"submit\"] { width: 100%; }</code> to make your submit button stretch full-width. The <code>button[type=\"submit\"]</code> selector specifically targets buttons used for form submission, and a <strong>full-width button creates a clear, easy-to-click call to action</strong>. This pattern is standard on login pages, checkout forms, and sign-up flows.",
        task: "Add CSS: <code>button[type=\"submit\"] { width: 100%; }</code>.",
        tip: "Use the attribute selector <code>[type=\"submit\"]</code> to target submit buttons without adding a separate class.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf('button[type="submit"]') !== -1; },
        getHint: function() { return "Add: button[type=\"submit\"] { width: 100%; }"; },
        successMsg: "Your submit button spans the full form width!",
        errorMsg: ""
      },
      {
        id: 32,
        title: "Add a Footer",
        description: "Add a <code>&lt;footer&gt;</code> with copyright text like \"&copy; 2025 My Portfolio. All rights reserved.\" The <code>&lt;footer&gt;</code> element <strong>represents the closing section of a page</strong>, typically containing legal info, links, or credits. Almost every website uses a footer — it provides a consistent endpoint for navigation and displays important legal information.",
        task: "After contact section (inside container), add footer with copyright paragraph.",
        tip: "Use the <code>&amp;copy;</code> HTML entity to display the copyright symbol (&copy;) correctly.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section></body>\n</html>",
        validate: function(code) { return code.indexOf("<footer") !== -1 && code.indexOf("&copy;") !== -1; },
        getHint: function() { return "Add: <footer><p>&copy; 2025 My Portfolio. All rights reserved.</p></footer>"; },
        successMsg: "Your portfolio now has a proper footer!",
        errorMsg: ""
      },
      {
        id: 33,
        title: "Style the Footer",
        description: "Style your <code>footer</code> with <code>text-align: center; padding: 20px; color: #7f8c8d; font-size: 14px;</code>. The muted gray color <strong>visually de-emphasizes the footer</strong> so it doesn't compete with main content. This design pattern — smaller, lighter, and centered footer text — is the web standard, used by Apple, Google, and Microsoft.",
        task: "Add CSS for <code>footer</code>: text-align, padding, color, font-size.",
        tip: "Use a lighter color like <code>#7f8c8d</code> for secondary text — it creates visual hierarchy without being distracting.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p>&copy; 2025 My Portfolio. All rights reserved.</p>\n  </footer></body>\n</html>",
        validate: function(code) { return code.indexOf("footer") !== -1 && code.indexOf("text-align: center") !== -1 && code.indexOf("padding:") !== -1; },
        getHint: function() { return "Add: footer { text-align: center; padding: 20px; color: #7f8c8d; font-size: 14px; }"; },
        successMsg: "Your footer looks clean and professional!",
        errorMsg: ""
      },
      {
        id: 34,
        title: "Add Navigation Hover Effect",
        description: "Add <code>nav a:hover { color: #3498db; }</code> to change link color on hover. The <code>:hover</code> pseudo-class <strong>provides interactive feedback</strong> by visually distinguishing links when users mouse over them. This hover effect is a universally expected interaction pattern — every site with navigation links changes their appearance on hover.",
        task: "Add CSS: <code>nav a:hover { color: #3498db; }</code>.",
        tip: "Use your primary brand color for hover effects to create a consistent interactive language across the page.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }\nfooter {\n    text-align: center;\n    padding: 20px;\n    color: #7f8c8d;\n    font-size: 14px;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p>&copy; 2025 My Portfolio. All rights reserved.</p>\n  </footer></body>\n</html>",
        validate: function(code) { return code.indexOf("nav a:hover") !== -1; },
        getHint: function() { return "Add: nav a:hover { color: #3498db; }"; },
        successMsg: "Your navigation responds to hover!",
        errorMsg: ""
      },
      {
        id: 35,
        title: "Add Smooth Transitions",
        description: "Add <code>transition: all 0.3s ease;</code> to both <code>button</code> and <code>nav a</code> selectors. The <code>transition</code> property <strong>animates changes between states</strong> over a specified duration, making hover effects feel smooth instead of abrupt. Smooth transitions are a hallmark of polished, professional sites — Apple's website is a prime example of this design philosophy.",
        task: "Add <code>transition: all 0.3s ease;</code> to both button and nav a CSS rules.",
        tip: "A <code>0.3s</code> duration is the sweet spot — fast enough to feel responsive, slow enough to be noticeable.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }\nfooter {\n    text-align: center;\n    padding: 20px;\n    color: #7f8c8d;\n    font-size: 14px;\n  }\nnav a:hover {\n    color: #3498db;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p>&copy; 2025 My Portfolio. All rights reserved.</p>\n  </footer></body>\n</html>",
        validate: function(code) { var idx = code.indexOf("transition: all"); return idx !== -1 && code.indexOf("transition: all", idx+1) !== -1; },
        getHint: function() { return "Add transition: all 0.3s ease; to both button and nav a."; },
        successMsg: "Your hover effects are now smooth and professional!",
        errorMsg: ""
      },
      {
        id: 36,
        title: "Add a Gradient Background",
        description: "Replace your body's solid background with <code>background: linear-gradient(135deg, #667eea, #764ba2);</code>. The <code>linear-gradient</code> function <strong>creates a smooth color transition</strong> between two or more colors, adding visual richness to your page. Gradient backgrounds are widely used by SaaS products (Stripe, Zoom) to create modern, eye-catching hero sections.",
        task: "Add <code>background: linear-gradient(135deg, #667eea, #764ba2);</code> as a new body rule to override the solid color.",
        tip: "The <code>135deg</code> angle creates a diagonal gradient — experiment with angles to find a direction that looks best.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }\nfooter {\n    text-align: center;\n    padding: 20px;\n    color: #7f8c8d;\n    font-size: 14px;\n  }\nnav a:hover {\n    color: #3498db;\n  }\nbutton {\n    transition: all 0.3s ease;\n  }\n  nav a {\n    transition: all 0.3s ease;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p>&copy; 2025 My Portfolio. All rights reserved.</p>\n  </footer></body>\n</html>",
        validate: function(code) { return code.indexOf("linear-gradient") !== -1; },
        getHint: function() { return "Add a new body rule: body { background: linear-gradient(135deg, #667eea, #764ba2); }"; },
        successMsg: "Your page has a beautiful gradient background!",
        errorMsg: ""
      },
      {
        id: 37,
        title: "Add Glassmorphism Effect",
        description: "Update your sections with <code>background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);</code>. The <code>backdrop-filter: blur()</code> property creates the <strong>glassmorphism effect</strong> — a translucent background that blurs whatever is behind it. This modern aesthetic is used by Apple's macOS, Windows 11, and popular design portfolios to create a sleek, layered look.",
        task: "Add a new section rule with translucent background, backdrop-filter, and border for the glass effect.",
        tip: "Glassmorphism works best over gradient or image backgrounds — the contrast makes the glass effect visible.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }\nfooter {\n    text-align: center;\n    padding: 20px;\n    color: #7f8c8d;\n    font-size: 14px;\n  }\nnav a:hover {\n    color: #3498db;\n  }\nbutton {\n    transition: all 0.3s ease;\n  }\n  nav a {\n    transition: all 0.3s ease;\n  }\nbody {\n    background: linear-gradient(135deg, #667eea, #764ba2);\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p>&copy; 2025 My Portfolio. All rights reserved.</p>\n  </footer></body>\n</html>",
        validate: function(code) { return code.indexOf("backdrop-filter: blur") !== -1; },
        getHint: function() { return "Add: section { background: rgba(255,255,255,0.85); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); }"; },
        successMsg: "Your sections have the glassmorphism effect!",
        errorMsg: ""
      },
      {
        id: 38,
        title: "Add Section Hover Effect",
        description: "Let us make sections <strong>lift slightly</strong> when hovered. Use <code>transform: translateY(-5px);</code> to move the element up. Add <code>transition</code> so the animation is smooth.<br><br>🚀 Subtle hover effects make your portfolio feel dynamic and engaging. Users love interactive elements that respond to their mouse.<br><br>👉 Add a hover effect that lifts sections up with a smooth transition.",
        task: "Add CSS: <code>section:hover { transform: translateY(-5px); transition: transform 0.3s ease; }</code>.",
        tip: "<code>transform: translateY(-5px)</code> moves the element up. Always pair transforms with transitions for smooth animation.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }\nfooter {\n    text-align: center;\n    padding: 20px;\n    color: #7f8c8d;\n    font-size: 14px;\n  }\nnav a:hover {\n    color: #3498db;\n  }\nbutton {\n    transition: all 0.3s ease;\n  }\n  nav a {\n    transition: all 0.3s ease;\n  }\nbody {\n    background: linear-gradient(135deg, #667eea, #764ba2);\n  }\nsection {\n    background: rgba(255, 255, 255, 0.85);\n    backdrop-filter: blur(10px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p>&copy; 2025 My Portfolio. All rights reserved.</p>\n  </footer></body>\n</html>",
        validate: function(code) { return code.indexOf("section:hover") !== -1 && code.indexOf("translateY") !== -1; },
        getHint: function() { return "Add: section:hover { transform: translateY(-5px); transition: transform 0.3s ease; }"; },
        successMsg: "Your sections float upward with a smooth hover effect!",
        errorMsg: ""
      },
      {
        id: 39,
        title: "Add Project Card Hover Effect",
        description: "Let us add a hover effect to your project cards too. Make them <strong>lift slightly</strong> when hovered, just like the sections.<br><br>📇 Consistent hover effects across your portfolio create a <strong>cohesive, polished feel</strong>. Every interactive element should respond to the user.<br><br>👉 Add a hover effect to project cards that lifts them up.",
        task: "Add CSS: <code>.project-card:hover { transform: translateY(-3px); }</code>.",
        tip: "Use <code>.project-card:hover</code> to target hover state of project cards. The <code>-3px</code> is smaller than sections for subtlety.",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }\nfooter {\n    text-align: center;\n    padding: 20px;\n    color: #7f8c8d;\n    font-size: 14px;\n  }\nnav a:hover {\n    color: #3498db;\n  }\nbutton {\n    transition: all 0.3s ease;\n  }\n  nav a {\n    transition: all 0.3s ease;\n  }\nbody {\n    background: linear-gradient(135deg, #667eea, #764ba2);\n  }\nsection {\n    background: rgba(255, 255, 255, 0.85);\n    backdrop-filter: blur(10px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n  }\nsection:hover {\n    transform: translateY(-5px);\n    transition: transform 0.3s ease;\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p>&copy; 2025 My Portfolio. All rights reserved.</p>\n  </footer></body>\n</html>",
        validate: function(code) { return code.indexOf(".project-card:hover") !== -1; },
        getHint: function() { return "Add: .project-card:hover { transform: translateY(-3px); }"; },
        successMsg: "Your project cards now lift on hover! Consistent hover effects look professional.",
        errorMsg: ""
      },
      {
        id: 40,
        title: "Portfolio Complete!",
        description: "<strong>Congratulations — your Modern Personal Portfolio Website is complete!</strong> You have built a fully responsive, beautifully styled portfolio from scratch, learning <strong>HTML structure</strong>, <strong>CSS styling</strong>, layout techniques, hover effects, transitions, gradients, and even glassmorphism. You now have a professional portfolio template that you can customize with your own content and deploy to share with the world.<br><br>🎉 <strong>What you built:</strong><br>✅ A complete multi-section portfolio page<br>✅ Navigation bar with hover effects<br>✅ Profile image with circular styling<br>✅ About Me, Skills, Projects, and Contact sections<br>✅ Interactive buttons with transitions<br>✅ Glassmorphism cards with shadows<br>✅ Gradient background<br>✅ Professional footer<br><br>🌟 The web is yours to create. Keep learning and building!",
        task: "This is the final step. Your portfolio is complete! Click <strong>Run</strong> to see your fully styled portfolio.",
        tip: "Your next step is to deploy your portfolio using <strong>GitHub Pages</strong> or <strong>Netlify</strong> — both offer free hosting for static sites!",
        startingCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n\nbody {\n    background-color: #f0f4f8;\n  }\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n  }\nh1 {\n    color: #2c3e50;\n  }\nh1 {\n    font-size: 36px;\n    text-align: center;\n  }\np {\n    font-size: 18px;\n    line-height: 1.6;\n  }\nbody {\n    margin: 0;\n    padding: 20px;\n  }\nh2 {\n    color: #34495e;\n    font-size: 28px;\n  }\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n  }\nnav {\n    background: white;\n    padding: 15px;\n    text-align: center;\n    border-radius: 8px;\n  }\nnav a {\n    text-decoration: none;\n    color: #2c3e50;\n    margin: 0 15px;\n    font-weight: bold;\n  }\nimg {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto 20px;\n  }\nsection {\n    background: white;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 12px;\n  }\nsection {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\nbutton {\n    background: #3498db;\n    color: white;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 25px;\n    font-size: 16px;\n    cursor: pointer;\n  }\nbutton:hover {\n    background: #2980b9;\n  }\nimg {\n    border: 4px solid #3498db;\n  }\n.skill {\n    display: inline-block;\n    background: #e8f4fd;\n    color: #3498db;\n    padding: 8px 20px;\n    margin: 5px;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n.project-card {\n    background: #f8fafc;\n    padding: 20px;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    border-left: 4px solid #3498db;\n  }\n.project-card h3 {\n    margin-top: 0;\n    color: #2c3e50;\n  }\ninput, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\nbutton[type=\"submit\"] {\n    width: 100%;\n  }\nfooter {\n    text-align: center;\n    padding: 20px;\n    color: #7f8c8d;\n    font-size: 14px;\n  }\nnav a:hover {\n    color: #3498db;\n  }\nbutton {\n    transition: all 0.3s ease;\n  }\n  nav a {\n    transition: all 0.3s ease;\n  }\nbody {\n    background: linear-gradient(135deg, #667eea, #764ba2);\n  }\nsection {\n    background: rgba(255, 255, 255, 0.85);\n    backdrop-filter: blur(10px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n  }\nsection:hover {\n    transform: translateY(-5px);\n    transition: transform 0.3s ease;\n  }\n.project-card:hover {\n    transform: translateY(-3px);\n  }  </style>\n</head>\n<body>\n<div class=\"container\">\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Skills</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n    <section id=\"home\">\n      <img src=\"profile.jpg\" alt=\"Profile Photo\">\n      <h1>My Portfolio</h1>\n      <p>Welcome to my personal portfolio. I am learning HTML and CSS to build beautiful websites.</p>\n    </section>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am a passionate learner who loves creating beautiful websites. I am currently learning HTML and CSS to turn my ideas into reality.</p>\n    </section>\n  </div>\n  <button>Learn More About Me</button>\n  <section id=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skill\">HTML</div>\n    <div class=\"skill\">CSS</div>\n    <div class=\"skill\">JavaScript</div>\n    <div class=\"skill\">Design</div>\n  </section>\n  <section id=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project-card\">\n      <h3>Project One</h3>\n      <p>A beautiful website I built using HTML and CSS. It features a clean layout and modern design.</p>\n    </div>\n    <div class=\"project-card\">\n      <h3>Project Two</h3>\n      <p>An interactive web application that demonstrates my skills in responsive design and styling.</p>\n    </div>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Me</h2>\n    <form>\n      <input type=\"text\" placeholder=\"Your Name\">\n      <input type=\"email\" placeholder=\"Your Email\">\n      <textarea placeholder=\"Your Message\" rows=\"4\"></textarea>\n      <button type=\"submit\">Send Message</button>\n    </form>\n  </section>\n  <footer>\n    <p>&copy; 2025 My Portfolio. All rights reserved.</p>\n  </footer></body>\n</html>",
        validate: function(code) { return true; },
        getHint: function() { return ""; },
        successMsg: "🎉 AMAZING! You completed CSS Level 1 and built a complete portfolio from scratch! 🎉",
        errorMsg: ""
      }
    ],

    /* ===== CSS LEVEL 2: EXTERNAL CSS & WEBSITE STYLING (20 steps) ===== */
    'css-2': [
      {
        id: 1,
        title: "Create your style.css file",
        file: "style.css",
        description: "<strong>Start with a CSS file</strong> When building a website, developers keep their CSS in a separate file. This keeps code organized and makes it easy to style multiple pages from one place.",
        task: "Create your style.css file by adding a CSS comment inside the CSS editor.",
        tip: "",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n</head>\n<body>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */",
        validate: function(html, css) { return css.indexOf('Coffee Shop Styles') !== -1; },
        getHint: function(html, css) { return "Add the comment: /* style.css - Coffee Shop Styles */"; },
        successMsg: "Perfect! You just created your first external CSS file. The /* */ is a CSS comment — it's ignored by the browser but helps developers document their code.",
        errorMsg: ""
      },
      {
        id: 2,
        title: "Connect CSS to HTML",
        file: "index.html",
        description: "<strong>Link your CSS file</strong> The <code>&lt;link&gt;</code> tag connects your HTML file to your CSS stylesheet. Place it inside the <code>&lt;head&gt;</code> section so the browser loads the styles before rendering the page.",
        task: "Inside the <head>, add <link rel=\"stylesheet\" href=\"style.css\"> to connect your CSS file.",
        tip: "",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n</head>\n<body>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */",
        validate: function(html, css) { return html.indexOf('href=\"style.css\"') !== -1; },
        getHint: function(html, css) { return "Add this line inside head: <link rel=\"stylesheet\" href=\"style.css\">"; },
        successMsg: "Excellent! The <link> tag tells the browser to load style.css and apply its styles to the HTML page.",
        errorMsg: ""
      },
      {
        id: 3,
        title: "Add Coffee Shop Heading",
        file: "index.html",
        description: "<strong>Use an HTML heading</strong> The <code>&lt;h1&gt;</code> tag creates the most important heading on your page. Every webpage should have one <code>&lt;h1&gt;</code> that describes the main topic.",
        task: "Inside <body>, add an <h1> heading with the text \"Brew &amp; Bean Coffee\".",
        tip: "The &amp; is an HTML entity that displays as & \u2014 it's the correct way to write an ampersand in HTML.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */",
        validate: function(html, css) { return html.indexOf('Brew') !== -1 && html.indexOf('Bean') !== -1 && html.indexOf('<h1') !== -1; },
        getHint: function(html, css) { return "Add this inside the body: <h1>Brew &amp; Bean Coffee</h1>"; },
        successMsg: "Great! Your coffee shop now has a main heading. The <h1> tag is the most important heading on the page.",
        errorMsg: ""
      },
      {
        id: 4,
        title: "Style the Heading Color",
        file: "style.css",
        description: "<strong>Change text color with CSS</strong> The <code>color</code> property changes text color. Hex codes like <code>#6B3E2E</code> represent colors using six hexadecimal digits \u2014 perfect for precise branding.",
        task: "In your CSS, add: h1 { color: #6B3E2E; } to give the heading a rich coffee brown color.",
        tip: "#6B3E2E is a warm coffee brown color. Hex codes always start with # followed by 6 characters.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */",
        validate: function(html, css) { return css.indexOf('color:') !== -1 && css.indexOf('#6B3E2E') !== -1; },
        getHint: function(html, css) { return "Add to the CSS: h1 { color: #6B3E2E; }"; },
        successMsg: "Beautiful! Now your heading has a coffee-themed brown color. The color property changes text color.",
        errorMsg: ""
      },
      {
        id: 5,
        title: "Set the Page Background",
        file: "style.css",
        description: "<strong>Add a background color</strong> The <code>background-color</code> property fills the entire element with a solid color. For the <code>body</code> element, it covers the whole page behind all content.",
        task: "Add body { background-color: #F5F0EB; } to give your page a warm cream background.",
        tip: "background-color fills the entire page behind all your content. Choose colors that complement each other.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}",
        validate: function(html, css) { return css.indexOf('background-color:') !== -1; },
        getHint: function(html, css) { return "Add to the CSS: body { background-color: #F5F0EB; }"; },
        successMsg: "Perfect! The warm cream background creates a cozy coffee shop feel. Light backgrounds are easier on the eyes.",
        errorMsg: ""
      },
      {
        id: 6,
        title: "Add a Welcome Paragraph",
        file: "index.html",
        description: "<strong>Write content with paragraphs</strong> The <code>&lt;p&gt;</code> tag defines a paragraph of text. Paragraphs are the most common way to add readable content to a webpage.",
        task: "Below the <h1>, add a <p> paragraph: \"Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.\"",
        tip: "",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}",
        validate: function(html, css) { return html.indexOf('<p>') !== -1 && html.indexOf('Welcome to Brew') !== -1; },
        getHint: function(html, css) { return "After the h1, add: <p>Welcome to Brew &amp; Bean...</p>"; },
        successMsg: "Great! Paragraphs are the building blocks of web content. Every website uses <p> tags for readable text.",
        errorMsg: ""
      },
      {
        id: 7,
        title: "Style the Paragraph",
        file: "style.css",
        description: "<strong>Improve text readability</strong> CSS typography properties like <code>font-size</code>, <code>line-height</code>, and <code>color</code> make your text comfortable to read.",
        task: "Add CSS for paragraphs: p { font-size: 18px; line-height: 1.6; color: #4A3728; }",
        tip: "line-height controls spacing between lines \u2014 1.6 is ideal for comfortable reading. 18px is a good paragraph size.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}",
        validate: function(html, css) { return css.indexOf('line-height:') !== -1 && css.indexOf('font-size:') !== -1; },
        getHint: function(html, css) { return "Add to CSS: p { font-size: 18px; line-height: 1.6; color: #4A3728; }"; },
        successMsg: "Excellent! Now your paragraph is styled for easy reading. Professional websites always carefully set typography.",
        errorMsg: ""
      },
      {
        id: 8,
        title: "Add a Coffee Image",
        file: "index.html",
        description: "<strong>Display images with HTML</strong> The <code>&lt;img&gt;</code> tag adds images to your page. It uses <code>src</code> for the file path and <code>alt</code> for descriptive text that helps accessibility.",
        task: "Below the paragraph, add an image: <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">",
        tip: "The src attribute specifies the image file path. The alt attribute provides text for screen readers and when images fail to load.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}",
        validate: function(html, css) { return html.indexOf('<img') !== -1 && html.indexOf('src=\"coffee.jpg\"') !== -1; },
        getHint: function(html, css) { return "Add after the paragraph: <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">"; },
        successMsg: "Perfect! Images make your website visually appealing. Always include alt text for accessibility.",
        errorMsg: ""
      },
      {
        id: 9,
        title: "Style the Image",
        file: "style.css",
        description: "<strong>Make images responsive</strong> Use <code>max-width: 100%</code> to ensure images never overflow their container, and <code>border-radius</code> to add soft rounded corners.",
        task: "Add: img { max-width: 100%; border-radius: 12px; } so the image fits its container and has rounded corners.",
        tip: "max-width: 100% ensures the image never overflows its container. border-radius adds soft, modern corners.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n  <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}",
        validate: function(html, css) { return css.indexOf('border-radius:') !== -1 && css.indexOf('max-width:') !== -1; },
        getHint: function(html, css) { return "Add to CSS: img { max-width: 100%; border-radius: 12px; }"; },
        successMsg: "Beautiful! Rounded corners make images look modern and polished. max-width keeps them responsive.",
        errorMsg: ""
      },
      {
        id: 10,
        title: "Add Our Menu Section",
        file: "index.html",
        description: "<strong>Organize content with sections</strong> The <code>&lt;section&gt;</code> tag groups related content together. Use <code>&lt;ul&gt;</code> (unordered list) with <code>&lt;li&gt;</code> items to display a list.",
        task: "After the image, add a <section> with <h2>Our Menu</h2> and a <ul> list of coffee items.",
        tip: "The <section> tag groups related content. <ul> creates a bulleted list. Each item uses <li>.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n  <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}",
        validate: function(html, css) { return html.indexOf('<section') !== -1 && html.indexOf('Our Menu') !== -1 && html.indexOf('<ul>') !== -1; },
        getHint: function(html, css) { return "Add: <section><h2>Our Menu</h2><ul><li>Espresso</li><li>Cappuccino</li><li>Latte</li><li>Cold Brew</li></ul></section>"; },
        successMsg: "Great! Your menu section lists coffee offerings. Using semantic HTML like <section> helps organize your page.",
        errorMsg: ""
      },
      {
        id: 11,
        title: "Style the Menu Section",
        file: "style.css",
        description: "<strong>Create visual cards</strong> Adding <code>background: white</code>, <code>padding</code>, and <code>border-radius</code> to sections creates card-like containers that stand out against the page background.",
        task: "Add: section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 12px; }",
        tip: "White backgrounds on sections create visual cards against the page background. margin-bottom adds spacing between sections.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n  <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}",
        validate: function(html, css) { return css.indexOf('section {') !== -1 && css.indexOf('padding:') !== -1 && css.indexOf('background: white') !== -1; },
        getHint: function(html, css) { return "Add: section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 12px; }"; },
        successMsg: "Excellent! Each section now looks like a distinct card. This is how professional sites create visual separation.",
        errorMsg: ""
      },
      {
        id: 12,
        title: "Add Order Button",
        file: "index.html",
        description: "<strong>Add interactive buttons</strong> The <code>&lt;button&gt;</code> element creates a clickable button. Buttons let users take action \u2014 like placing an order or submitting a form.",
        task: "Inside the menu section, after the <ul>, add a button: <button>Order Now</button>",
        tip: "",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n  <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}",
        validate: function(html, css) { return html.indexOf('<button') !== -1 && html.indexOf('Order Now') !== -1; },
        getHint: function(html, css) { return "Add inside the section after the list: <button>Order Now</button>"; },
        successMsg: "Great! Buttons let users take action on your site. They're essential for any interactive website.",
        errorMsg: ""
      },
      {
        id: 13,
        title: "Style the Button",
        file: "style.css",
        description: "<strong>Design clickable buttons</strong> Use <code>background</code>, <code>color</code>, <code>padding</code>, <code>border-radius</code>, and <code>cursor</code> to style buttons that match your brand.",
        task: "Add: button { background: #6B3E2E; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-size: 16px; cursor: pointer; }",
        tip: "border: none removes the default button border. cursor: pointer changes the mouse to a hand icon on hover.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n  <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n    <button>Order Now</button>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}",
        validate: function(html, css) { return css.indexOf('button {') !== -1 && css.indexOf('background: #6B3E2E') !== -1 && css.indexOf('cursor: pointer') !== -1; },
        getHint: function(html, css) { return "Add: button { background: #6B3E2E; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-size: 16px; cursor: pointer; }"; },
        successMsg: "Beautiful! Your button now matches the coffee shop theme. The padding makes it easy to click.",
        errorMsg: ""
      },
      {
        id: 14,
        title: "Add a Button Hover Effect",
        file: "style.css",
        description: "<strong>Add interactivity with :hover</strong> The <code>:hover</code> pseudo-class applies styles when the user's mouse is over an element. It provides visual feedback that makes your site feel responsive.",
        task: "Add: button:hover { background: #8B5E3C; } to make the button slightly lighter when hovered.",
        tip: "The :hover pseudo-class applies styles when the user's mouse is over an element. It provides visual feedback.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n  <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n    <button>Order Now</button>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n\nbutton {\n  background: #6B3E2E;\n  color: white;\n  border: none;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 16px;\n  cursor: pointer;\n}",
        validate: function(html, css) { return css.indexOf(':hover') !== -1; },
        getHint: function(html, css) { return "Add: button:hover { background: #8B5E3C; }"; },
        successMsg: "Excellent! Hover effects make your site feel interactive and responsive. They're a hallmark of professional design.",
        errorMsg: ""
      },
      {
        id: 15,
        title: "Wrap Content in a Card Container",
        file: "index.html",
        description: "<strong>Group elements with div</strong> The <code>&lt;div&gt;</code> is a generic container that groups elements together. Adding a <code>class</code> attribute lets you target it with CSS.",
        task: "Wrap your <h1>, <p>, and <img> inside a <div class=\"card\"> to group them together.",
        tip: "The <div> is a generic container. Classes let you apply specific styles to elements.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Brew &amp; Bean Coffee</h1>\n  <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n  <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n    <button>Order Now</button>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n\nbutton {\n  background: #6B3E2E;\n  color: white;\n  border: none;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #8B5E3C;\n}",
        validate: function(html, css) { return html.indexOf('class=\"card\"') !== -1; },
        getHint: function(html, css) { return "Wrap h1, p, and img in: <div class=\"card\"> ... </div>"; },
        successMsg: "Great! Wrapping content in a container div lets you style them as a group. Classes are how we target elements in CSS.",
        errorMsg: ""
      },
      {
        id: 16,
        title: "Style the Card",
        file: "style.css",
        description: "<strong>Center and enhance with box-shadow</strong> Use <code>max-width</code> with <code>margin: 0 auto</code> to center content. <code>box-shadow</code> adds depth beneath the card.",
        task: "Add: .card { max-width: 800px; margin: 0 auto; padding: 30px; background: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }",
        tip: "margin: 0 auto centers the card horizontally. box-shadow adds depth with a subtle shadow beneath the card.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h1>Brew &amp; Bean Coffee</h1>\n    <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n    <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  </div>\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n    <button>Order Now</button>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n\nbutton {\n  background: #6B3E2E;\n  color: white;\n  border: none;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #8B5E3C;\n}",
        validate: function(html, css) { return css.indexOf('.card') !== -1 && css.indexOf('max-width:') !== -1 && css.indexOf('box-shadow:') !== -1; },
        getHint: function(html, css) { return "Add: .card { max-width: 800px; margin: 0 auto; padding: 30px; background: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }"; },
        successMsg: "Perfect! The card now has a shadow, centered layout, and white background \u2014 like an elegant menu card in a coffee shop.",
        errorMsg: ""
      },
      {
        id: 17,
        title: "Add About Us Section",
        file: "index.html",
        description: "<strong>Unique sections with id</strong> The <code>id</code> attribute gives a unique identifier to an element. Unlike classes which can be reused, each id must be unique on the page.",
        task: "After the menu section, add: <section id=\"about\"><h2>About Us</h2><p>Founded in 2020, Brew &amp; Bean is a cozy neighborhood coffee shop dedicated to serving the highest quality coffee.</p></section>",
        tip: "The id attribute gives a unique identifier to an element. It's useful for targeted styling and anchor links.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h1>Brew &amp; Bean Coffee</h1>\n    <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n    <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  </div>\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n    <button>Order Now</button>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n\nbutton {\n  background: #6B3E2E;\n  color: white;\n  border: none;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #8B5E3C;\n}\n\n.card {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 30px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n}",
        validate: function(html, css) { return html.indexOf('id=\"about\"') !== -1 && html.indexOf('About Us') !== -1; },
        getHint: function(html, css) { return "Add: <section id=\"about\"><h2>About Us</h2><p>Founded in 2020...</p></section>"; },
        successMsg: "Great! Each section of your page now has a clear purpose. The id=\"about\" lets you style this section uniquely.",
        errorMsg: ""
      },
      {
        id: 18,
        title: "Style the About Section",
        file: "style.css",
        description: "<strong>Target elements by id</strong> The <code>#</code> selector in CSS targets an element by its <code>id</code> attribute. Id selectors are more specific than class or tag selectors.",
        task: "Add: #about { background: #FAF6F1; border-left: 4px solid #6B3E2E; } to give the about section a special style.",
        tip: "The # selector targets an element by its id attribute. Id selectors are more specific than class or tag selectors.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h1>Brew &amp; Bean Coffee</h1>\n    <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n    <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  </div>\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n    <button>Order Now</button>\n  </section>\n  <section id=\"about\">\n    <h2>About Us</h2>\n    <p>Founded in 2020, Brew &amp; Bean is a cozy neighborhood coffee shop dedicated to serving the highest quality coffee.</p>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n\nbutton {\n  background: #6B3E2E;\n  color: white;\n  border: none;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #8B5E3C;\n}\n\n.card {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 30px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n}",
        validate: function(html, css) { return css.indexOf('#about') !== -1; },
        getHint: function(html, css) { return "Add: #about { background: #FAF6F1; border-left: 4px solid #6B3E2E; }"; },
        successMsg: "Excellent! The about section now has a warm background and a coffee-colored accent border. Id selectors are perfect for unique sections.",
        errorMsg: ""
      },
      {
        id: 19,
        title: "Add Contact Section",
        file: "index.html",
        description: "<strong>Complete your page structure</strong> Building a complete landing page requires multiple sections. Each section serves a different purpose, creating a clear, organized layout.",
        task: "After the about section, add: <section id=\"contact\"><h2>Contact Us</h2><p>Visit us at 123 Coffee Street, or call (555) 123-4567</p><button>Get in Touch</button></section>",
        tip: "",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h1>Brew &amp; Bean Coffee</h1>\n    <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n    <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  </div>\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n    <button>Order Now</button>\n  </section>\n  <section id=\"about\">\n    <h2>About Us</h2>\n    <p>Founded in 2020, Brew &amp; Bean is a cozy neighborhood coffee shop dedicated to serving the highest quality coffee.</p>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n\nbutton {\n  background: #6B3E2E;\n  color: white;\n  border: none;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #8B5E3C;\n}\n\n.card {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 30px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n}\n\n#about {\n  background: #FAF6F1;\n  border-left: 4px solid #6B3E2E;\n}",
        validate: function(html, css) { return html.indexOf('id=\"contact\"') !== -1 && html.indexOf('Contact Us') !== -1 && html.indexOf('Get in Touch') !== -1; },
        getHint: function(html, css) { return "Add: <section id=\"contact\"><h2>Contact Us</h2><p>Visit us...</p><button>Get in Touch</button></section>"; },
        successMsg: "Your coffee shop page is now complete with a contact section! Multiple sections give the page a professional structure.",
        errorMsg: ""
      },
      {
        id: 20,
        title: "Final Polish",
        file: "style.css",
        description: "<strong>Finishing touches</strong> Center text with <code>text-align: center</code>, remove bullet points with <code>list-style: none</code>, and add spacing. These small refinements make your page look professionally designed.",
        task: "Add these final touches to your CSS: #contact { text-align: center; background: #6B3E2E; color: white; } ul { list-style: none; padding: 0; } li { padding: 8px 0; font-size: 18px; } .card { text-align: center; }",
        tip: "text-align: center centers text horizontally. list-style: none removes bullet points for a cleaner look.",
        startingHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Brew &amp; Bean Coffee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h1>Brew &amp; Bean Coffee</h1>\n    <p>Welcome to Brew &amp; Bean, where every cup tells a story. We serve handcrafted coffee made from the finest beans.</p>\n    <img src=\"coffee.jpg\" alt=\"Fresh brewed coffee\">\n  </div>\n  <section>\n    <h2>Our Menu</h2>\n    <ul>\n      <li>Espresso</li>\n      <li>Cappuccino</li>\n      <li>Latte</li>\n      <li>Cold Brew</li>\n    </ul>\n    <button>Order Now</button>\n  </section>\n  <section id=\"about\">\n    <h2>About Us</h2>\n    <p>Founded in 2020, Brew &amp; Bean is a cozy neighborhood coffee shop dedicated to serving the highest quality coffee.</p>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact Us</h2>\n    <p>Visit us at 123 Coffee Street, or call (555) 123-4567</p>\n    <button>Get in Touch</button>\n  </section>\n</body>\n</html>",
        startingCss: "/* style.css - Coffee Shop Styles */\n\nh1 {\n  color: #6B3E2E;\n}\n\nbody {\n  background-color: #F5F0EB;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #4A3728;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 12px;\n}\n\nsection {\n  background: white;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n\nbutton {\n  background: #6B3E2E;\n  color: white;\n  border: none;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #8B5E3C;\n}\n\n.card {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 30px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n}\n\n#about {\n  background: #FAF6F1;\n  border-left: 4px solid #6B3E2E;\n}",
        validate: function(html, css) { return css.indexOf('list-style: none') !== -1 && css.indexOf('text-align: center') !== -1; },
        getHint: function(html, css) { return "Add styling for #contact, ul, and li to complete your coffee shop design."; },
        successMsg: "\uD83C\uDF89 AMAZING! You built a complete Coffee Shop Landing Page using professional HTML + CSS workflow! You now understand how index.html and style.css work together! \uD83C\uDF89",
        errorMsg: ""
      }
    ],

  };

  /* ===== DYNAMIC LEVEL CARD LESSON COUNTS ===== */
  var levelCards = document.querySelectorAll('.level-card');
  levelCards.forEach(function (card) {
    var lessonsEl = card.querySelector('.level-lessons');
    if (!lessonsEl) return;

    var onClickAttr = card.getAttribute('onclick');
    var match = onClickAttr && onClickAttr.match(/openLevelPreview\(['"]?(css-\d+|\d+)['"]?\)/);
    if (!match) return;

    var levelId = match[1];
    var steps = lessonData[levelId];
    if (steps && steps.length) {
      lessonsEl.textContent = steps.length + ' Lessons';
    }
  });

  /* ===== LEVEL PREVIEW MODAL ===== */
  var previewOverlay = document.getElementById('levelPreviewOverlay');

  if (previewOverlay) {
    var previewClose = document.getElementById('previewClose');
    var previewStartBtn = document.getElementById('previewStartBtn');
    var previewTitle = document.getElementById('previewTitle');
    var previewBadge = document.getElementById('previewBadge');
    var previewDesc = document.getElementById('previewDesc');
    var previewDifficulty = document.getElementById('previewDifficulty');
    var previewTime = document.getElementById('previewTime');
    var previewLessons = document.getElementById('previewLessons');
    var previewFrame = document.getElementById('previewOutputFrame');
    var previewLevelNum = document.getElementById('previewLevelNum');
    var currentPreviewLevel = null;

    window.openLevelPreview = function (levelId) {
      var isCss = typeof levelId === 'string' && levelId.indexOf('css-') === 0;
      var meta = isCss ? cssLevelMeta[levelId] : levelMeta[levelId];
      if (!meta) return;
      currentPreviewLevel = levelId;
      if (previewStartBtn) previewStartBtn.setAttribute('data-level', levelId);

      if (previewTitle) previewTitle.textContent = meta.title;
      if (previewBadge) previewBadge.textContent = meta.badge;
      if (previewDesc) previewDesc.textContent = meta.description;
      if (previewDifficulty) previewDifficulty.textContent = meta.difficulty;
      if (previewTime) previewTime.textContent = meta.time;
      if (previewLessons) {
        var actualSteps = lessonData[levelId];
        previewLessons.textContent = (actualSteps && actualSteps.length ? actualSteps.length : meta.lessons) + ' Lessons';
      }
      if (previewLevelNum) previewLevelNum.textContent = isCss ? levelId.replace('css-', '') : levelId;

      var steps = lessonData[levelId];
      if (steps && steps.length > 0) {
        var lastStep = steps[steps.length - 1];
        var finalCode;
        if (levelId === 'css-2') {
          var html = lastStep.startingHtml || '';
          var css = lastStep.startingCss || '';
          finalCode = html.replace('</head>', '<style>\n' + css + '\n</style>\n</head>');
        } else {
          finalCode = lastStep.startingCode;
        }
        if (previewFrame) {
          var doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
          doc.open();
          doc.write(finalCode);
          doc.close();
        }
      } else if (previewFrame) {
        var doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        doc.open();
        doc.write('<html><body style="display:flex;align-items:center;justify-content:center;font-family:sans-serif;background:#0a0a1a;color:#64748b;padding:40px;text-align:center;"><div><h2 style="color:#7c3aed;margin-bottom:12px;">' + meta.title + '</h2><p style="color:#94a3b8;">CSS level lessons coming soon. Start with HTML basics first!</p></div></body></html>');
        doc.close();
      }

      previewOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    function closeLevelPreview() {
      previewOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (previewClose) {
      previewClose.addEventListener('click', closeLevelPreview);
    }

    previewOverlay.addEventListener('click', function (e) {
      if (e.target === previewOverlay) closeLevelPreview();
    });

    if (previewStartBtn) {
      previewStartBtn.addEventListener('click', function () {
        var levelId = this.getAttribute('data-level') || currentPreviewLevel;
        if (!levelId) return;
        var isCss = typeof levelId === 'string' && levelId.indexOf('css-') === 0;
        var meta = isCss ? cssLevelMeta[levelId] : levelMeta[levelId];
        if (meta && meta.levelUrl && meta.levelUrl !== '#') {
          window.location.href = meta.levelUrl;
        } else if (meta) {
          closeLevelPreview();
        }
      });
    }
  }

  /* ===== LEVEL SYSTEM ===== */
  var levelApp = document.getElementById('levelApp');

  if (levelApp) {
    var levelId = levelApp.getAttribute('data-level') || '1';
    var steps = lessonData[levelId] || lessonData['1'];

    /* ----- STATE ----- */
    var state = {
      currentStep: 0,
      validated: false,
      code: '',
      savedCodes: {},
      completedSteps: {},
    };

    /* ----- DOM REFS ----- */
    var instructionsPanel = document.getElementById('instructionsPanel');
    var codeEditor = document.getElementById('codeEditor');
    var previewFrame = document.getElementById('previewFrame');
    var validationMessage = document.getElementById('validationMessage');
    var runBtn = document.getElementById('runBtn');
    var clearBtn = document.getElementById('clearBtn');
    var nextBtn = document.getElementById('nextBtn');
    var backBtn = document.getElementById('backBtn');
    var stepIndicator = document.getElementById('stepIndicator');
    var progressDots = document.getElementById('progressDots');
    var lineNumbers = document.getElementById('lineNumbers');
    var toolbarStepTitle = document.getElementById('toolbarStepTitle');
    var completionOverlay = document.getElementById('completionOverlay');
    var progressIndicator = document.getElementById('progressIndicator');
    var progressBarFill = document.getElementById('progressBarFill');
    var progressText = document.getElementById('progressText');
    var levelContainer = document.querySelector('.level-layout');
    var mobileTabBtns = document.querySelectorAll('.mobile-tab-btn');

    /* ===== LOCAL STORAGE PERSISTENCE ===== */
    function loadCompletedSteps() {
      var saved = localStorage.getItem('codixify-level-' + levelId + '-completed');
      if (saved) {
        try { var parsed = JSON.parse(saved); for (var k in parsed) { if (parsed[k]) state.completedSteps[k] = true; } } catch(e) {}
      }
    }

    function saveCompletedSteps() {
      try { localStorage.setItem('codixify-level-' + levelId + '-completed', JSON.stringify(state.completedSteps)); } catch(e) {}
    }

    /* ===== UPDATE LEVEL PROGRESS ===== */
    function updateLevelProgress() {
      if (!progressText || !progressBarFill) return;
      var total = steps.length;
      var completed = 0;
      for (var key in state.completedSteps) {
        if (state.completedSteps[key]) completed++;
      }
      var percent = total > 0 ? Math.round((completed / total) * 100) : 0;
      progressBarFill.style.width = percent + '%';
      progressText.textContent = percent + '%';
      if (progressIndicator) {
        if (percent === 100) {
          progressIndicator.classList.add('level-complete');
          setTimeout(function () {
            progressIndicator.classList.add('celebrating');
            setTimeout(function () { progressIndicator.classList.remove('celebrating'); }, 1500);
          }, 100);
        } else {
          progressIndicator.classList.remove('level-complete', 'celebrating');
        }
      }
    }

    /* ===== INITIALIZE ===== */
    function init() {
      loadCompletedSteps();
      renderProgressDots();
      loadStep(0);
      updateLevelProgress();
      setupEditorLineNumbers();
      setupEventListeners();
      setupKeyboardShortcuts();
      setupTooltips();
    }

    /* ===== RENDER PROGRESS DOTS ===== */
    function renderProgressDots() {
      if (!progressDots) return;
      progressDots.innerHTML = '';
      for (var i = 0; i < steps.length; i++) {
        var dot = document.createElement('button');
        dot.className = 'progress-dot';
        dot.textContent = i + 1;
        dot.setAttribute('aria-label', 'Go to step ' + (i + 1));
        if (i === state.currentStep) dot.classList.add('active');
        else if (state.completedSteps[i]) dot.classList.add('completed');
        dot.addEventListener('click', (function (idx) {
          return function () { goToStep(idx); };
        })(i));
        progressDots.appendChild(dot);
      }
      progressDots.addEventListener('scroll', updateScrollFade, { passive: true });
      updateScrollFade();
      window.addEventListener('resize', updateScrollFade);
    }

    /* ===== PROGRESS DOTS SCROLL HELPERS ===== */
    function scrollActiveDotIntoView() {
      if (!progressDots) return;
      var activeDot = progressDots.querySelector('.progress-dot.active');
      if (!activeDot) return;
      var cw = progressDots.clientWidth;
      var sl = progressDots.scrollLeft;
      var dol = activeDot.offsetLeft;
      var dw = activeDot.offsetWidth;
      if (dol < sl) {
        progressDots.scrollLeft = dol - 8;
      } else if (dol + dw > sl + cw) {
        progressDots.scrollLeft = dol + dw - cw + 8;
      }
    }

    function updateScrollFade() {
      if (!progressDots) return;
      var sw = progressDots.scrollWidth;
      var cw = progressDots.clientWidth;
      if (sw <= cw) {
        progressDots.classList.remove('fade-left', 'fade-right');
        return;
      }
      var sl = progressDots.scrollLeft;
      progressDots.classList.toggle('fade-left', sl > 2);
      progressDots.classList.toggle('fade-right', sl + cw < sw - 2);
    }

    /* ===== GO TO STEP ===== */
    function goToStep(index) {
      if (index === state.currentStep) return;
      loadStep(index);
    }

    /* ===== LOAD STEP ===== */
    function loadStep(index) {
      var step = steps[index];
      if (!step) {
        if (instructionsPanel) {
          instructionsPanel.innerHTML = '<div class="step-counter"><span class="step-number">!</span><div><div class="step-label">Loading...</div></div></div><h2 class="step-title">Step not found</h2><div class="step-description">The lesson data for this step is missing. Please refresh the page.</div>';
        }
        return;
      }

      state.currentStep = index;
      state.validated = false;

      if (instructionsPanel) {
        instructionsPanel.innerHTML =
          '<div class="step-counter">' +
          '<span class="step-number">' +
          (index + 1) +
          '</span>' +
          '<div><div class="step-label">Step ' +
          (index + 1) +
          ' of ' +
          steps.length +
          '</div></div>' +
          '</div>' +
          '<h2 class="step-title">' +
          step.title +
          '</h2>' +
          '<div class="step-description">' +
          step.description +
          '</div>' +
          '<div class="step-task">' +
          '<div class="step-task-label">Your Task</div>' +
          '<p>' +
          step.task +
          '</p>' +
          '</div>' +
          (step.tip
            ? '<div class="tip-box"><div class="tip-label">▶ Tip</div><p>' +
              step.tip +
              '</p></div>'
            : '');
      }

      var restoreCode;
      if (state.savedCodes.hasOwnProperty(index)) {
        restoreCode = state.savedCodes[index];
      } else if (levelId === '1' && index > 0 && index <= 4) {
        for (var i = index - 1; i >= 0; i--) {
          if (state.savedCodes.hasOwnProperty(i)) {
            restoreCode = state.savedCodes[i];
            break;
          }
        }
        if (restoreCode === undefined) restoreCode = step.startingCode;
      } else {
        restoreCode = step.startingCode;
      }
      state.code = restoreCode;
      if (codeEditor) {
        codeEditor.value = restoreCode;
        updateLineNumbers();
      }

      if (validationMessage) {
        validationMessage.classList.add('hidden');
      }

      if (stepIndicator) {
        stepIndicator.textContent = 'Step ' + (index + 1) + ' of ' + steps.length;
      }

      if (toolbarStepTitle) {
        toolbarStepTitle.textContent = step.title;
      }

      updateProgressDots();
      updateLevelProgress();

      if (backBtn) {
        backBtn.disabled = index === 0;
      }

      if (nextBtn) {
        nextBtn.disabled = true;
        if (index === steps.length - 1) {
          nextBtn.innerHTML = '&#127881; Complete Level';
          nextBtn.classList.add('final');
        } else {
          nextBtn.innerHTML = 'Next Step &#8594;';
          nextBtn.classList.remove('final');
        }
      }

      if (previewFrame) {
        runCode();
      }

      if (runBtn) {
        runBtn.innerHTML = index === steps.length - 1 ? '&#9654; Run Final Code' : '&#9654; Run';
      }

      if (index === steps.length - 1) {
        setTimeout(function () {
          state.validated = true;
          if (nextBtn) nextBtn.disabled = false;
        }, 300);
      }

      if (instructionsPanel) {
        instructionsPanel.scrollTop = 0;
      }
    }

    /* ===== UPDATE PROGRESS DOTS ===== */
    function updateProgressDots() {
      var dots = document.querySelectorAll('.progress-dot');
      dots.forEach(function (dot, i) {
        dot.className = 'progress-dot';
        if (i === state.currentStep) dot.classList.add('active');
        else if (state.completedSteps[i]) dot.classList.add('completed');
      });
      scrollActiveDotIntoView();
      updateScrollFade();
    }

    /* ===== CODE EDITOR LINE NUMBERS ===== */
    function setupEditorLineNumbers() {
      if (!codeEditor || !lineNumbers) return;

      codeEditor.addEventListener('input', function () {
        state.code = codeEditor.value;
        state.savedCodes[state.currentStep] = codeEditor.value;
        state.validated = false;
        if (nextBtn) nextBtn.disabled = true;
        if (validationMessage) validationMessage.classList.add('hidden');
        updateLineNumbers();
      });

      codeEditor.addEventListener('scroll', function () {
        lineNumbers.scrollTop = codeEditor.scrollTop;
      });

      codeEditor.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
          e.preventDefault();
          var start = this.selectionStart;
          var end = this.selectionEnd;
          this.value = this.value.substring(0, start) + '  ' + this.value.substring(end);
          this.selectionStart = this.selectionEnd = start + 2;
          state.code = this.value;
          updateLineNumbers();
        }
      });
    }

    function updateLineNumbers() {
      if (!lineNumbers) return;
      var lines = state.code.split('\n').length;
      lineNumbers.innerHTML = '';
      for (var i = 1; i <= lines; i++) {
        var span = document.createElement('span');
        span.textContent = i;
        lineNumbers.appendChild(span);
      }
    }

    /* ===== RUN CODE ===== */
    function runCode() {
      if (!previewFrame) return;
      var code = state.code;
      var doc = previewFrame.contentDocument || previewFrame.contentWindow.document;

      if (!code || code.trim() === '') {
        doc.open();
        doc.write('<html><body style="display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#999;">No code to preview</body></html>');
        doc.close();
        return;
      }

      doc.open();
      doc.write(code);
      doc.close();
    }

    /* ===== VALIDATE CODE ===== */
    function validateCode() {
      var step = steps[state.currentStep];
      if (!step) return false;

      var isValid = step.validate(state.code);

      if (!validationMessage) return isValid;

      validationMessage.classList.remove('hidden', 'success', 'error');

      if (isValid) {
        validationMessage.className = 'validation-message success';
        validationMessage.innerHTML =
          '<span class="msg-icon">✓</span><span class="msg-text">' + step.successMsg + '</span>';
        state.validated = true;
        state.completedSteps[state.currentStep] = true;
        saveCompletedSteps();
        updateLevelProgress();
        if (nextBtn) nextBtn.disabled = false;
        updateProgressDots();
      } else {
        var hintText = '';
        if (step.getHint) {
          hintText = step.getHint(state.code);
        }
        var displayMsg = hintText || step.errorMsg;
        validationMessage.className = 'validation-message error';
        validationMessage.innerHTML =
          '<span class="msg-icon">✕</span><span class="msg-text">' + displayMsg + '</span>';
        state.validated = false;
        if (nextBtn) nextBtn.disabled = true;
      }

      return isValid;
    }

    /* ===== CLEAR CODE ===== */
    function clearCode() {
      var step = steps[state.currentStep];
      if (!step) return;

      state.code = step.startingCode;
      state.savedCodes[state.currentStep] = step.startingCode;
      if (codeEditor) {
        codeEditor.value = step.startingCode;
        updateLineNumbers();
      }

      if (validationMessage) {
        validationMessage.classList.add('hidden');
      }

      state.validated = false;
      if (nextBtn) nextBtn.disabled = true;
    }

    /* ===== NAVIGATION ===== */
    function nextStep() {
      if (state.validated && state.currentStep < steps.length - 1) {
        loadStep(state.currentStep + 1);
      } else if (state.validated && state.currentStep === steps.length - 1) {
        showCompletion();
      }
    }

    function prevStep() {
      if (state.currentStep > 0) {
        loadStep(state.currentStep - 1);
      }
    }

    /* ===== COMPLETION OVERLAY ===== */
    function showCompletion() {
      if (!completionOverlay) return;
      completionOverlay.classList.add('active');
    }

    /* ===== EVENT LISTENERS ===== */
    function setupEventListeners() {
      if (runBtn) {
        runBtn.addEventListener('click', function () {
          runCode();
          if (state.currentStep < steps.length - 1) {
            validateCode();
          }
        });
      }

      if (clearBtn) {
        clearBtn.addEventListener('click', clearCode);
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', nextStep);
      }

      if (backBtn) {
        backBtn.addEventListener('click', prevStep);
      }

      mobileTabBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var tab = this.getAttribute('data-tab');
          switchMobileTab(tab);
        });
      });

      document.querySelectorAll('.completion-close').forEach(function (el) {
        el.addEventListener('click', function () {
          if (completionOverlay) completionOverlay.classList.remove('active');
        });
      });
    }

    /* ===== KEYBOARD SHORTCUTS ===== */
    function setupKeyboardShortcuts() {
      function handleShortcut(e) {
        var isCtrlEnter = (e.ctrlKey || e.metaKey) && (e.key === 'Enter' || e.keyCode === 13);
        if (!isCtrlEnter) return;

        e.preventDefault();

        if (state.validated && nextBtn && !nextBtn.disabled) {
          nextStep();
        } else if (runBtn) {
          runBtn.click();
        }
      }

      document.addEventListener('keydown', handleShortcut);
    }

    /* ===== TOOLTIPS ===== */
    function setupTooltips() {
      function createTooltip(btn, text) {
        if (!btn) return;
        var tip = document.createElement('span');
        tip.className = 'tooltip-shortcut';
        tip.textContent = text;
        btn.appendChild(tip);

        btn.addEventListener('mouseenter', function () {
          tip.classList.add('visible');
        });
        btn.addEventListener('mouseleave', function () {
          tip.classList.remove('visible');
        });
      }

      createTooltip(runBtn, 'Shortcut: Ctrl + Enter');
      createTooltip(nextBtn, 'Press Ctrl + Enter again');
    }

    /* ===== MOBILE TABS ===== */
    function switchMobileTab(tab) {
      var activeBtn = document.querySelector('.mobile-tab-btn.active');
      if (activeBtn && activeBtn.getAttribute('data-tab') === tab) return;

      mobileTabBtns.forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
      });

      var panels = levelContainer
        ? levelContainer.querySelectorAll('.panel')
        : [];

      panels.forEach(function (panel) {
        panel.classList.remove('active');
        if (
          (tab === 'instructions' && panel.classList.contains('instructions-panel')) ||
          (tab === 'code' && panel.classList.contains('editor-panel')) ||
          (tab === 'preview' && panel.classList.contains('preview-panel'))
        ) {
          panel.classList.add('active');
        }
      });
    }

    /* ===== RESIZE HANDLES ===== */
    function setupResizeHandles() {
      var handles = document.querySelectorAll('.resize-handle');
      if (!handles.length) return;

      handles.forEach(function (handle) {
        var prevPanel = handle.previousElementSibling;
        if (!prevPanel) return;

        handle.addEventListener('mousedown', function (e) {
          e.preventDefault();
          document.body.classList.add('resizing');

          var startX = e.clientX;
          var startWidth = prevPanel.getBoundingClientRect().width;
          var minWidth = 160;
          var maxWidth = handle.dataset.resize === 'left' ? 600 : 800;
          var layout = prevPanel.closest('.level-layout');
          var maxLayoutWidth = layout ? layout.getBoundingClientRect().width - 200 : 9999;

          function onMouseMove(moveE) {
            var dx = moveE.clientX - startX;
            var newWidth = startWidth + dx;
            newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth, maxLayoutWidth));
            prevPanel.style.width = newWidth + 'px';
            prevPanel.style.flex = '0 0 ' + newWidth + 'px';
            if (handle.dataset.resize === 'left') {
              layout.style.gridTemplateColumns = newWidth + 'px 4px 1fr 4px 380px';
            } else {
              layout.style.gridTemplateColumns = '320px 4px ' + newWidth + 'px 4px 380px';
            }
          }

          function onMouseUp() {
            document.body.classList.remove('resizing');
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          }

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        });
      });
    }

    setupResizeHandles();

    /* ===== CSS-2 DUAL EDITOR MODE ===== */
    if (levelId === 'css-2') {
      var htmlEditor = document.getElementById('htmlEditor');
      var cssEditor = document.getElementById('cssEditor');
      var htmlTab = document.querySelector('.editor-tab[data-file="index.html"]');
      var cssTab = document.querySelector('.editor-tab[data-file="style.css"]');
      var editorLineNumbers = document.getElementById('lineNumbers');
      var activeFileTab = 'index.html';

      state.htmlCode = '';
      state.cssCode = '';
      state.htmlSavedCodes = {};
      state.cssSavedCodes = {};

      var origLoadStep = loadStep;
      loadStep = function(index) {
        var step = steps[index];
        if (!step) {
          if (instructionsPanel) {
            instructionsPanel.innerHTML = '<div class="step-counter"><span class="step-number">!</span><div><div class="step-label">Loading...</div></div></div><h2 class="step-title">Step not found</h2><div class="step-description">The lesson data for this step is missing. Please refresh the page.</div>';
          }
          return;
        }

        state.currentStep = index;
        state.validated = false;

        if (instructionsPanel) {
          var fileBadge = step.file ? '<div class="step-file-badge">\uD83D\uDCC1 ' + step.file + '</div>' : '';
          instructionsPanel.innerHTML =
            '<div class="step-counter">' +
            '<span class="step-number">' + (index + 1) + '</span>' +
            '<div><div class="step-label">Step ' + (index + 1) + ' of ' + steps.length + '</div></div>' +
            '</div>' +
            fileBadge +
            '<h2 class="step-title">' + step.title + '</h2>' +
            '<div class="step-description">' + step.description + '</div>' +
            '<div class="step-task">' +
            '<div class="step-task-label">\u270D\uFE0F Your Task</div>' +
            '<p>' + step.task + '</p>' +
            '</div>' +
            (step.tip ? '<div class="tip-box"><div class="tip-label">\u25B6 Tip</div><p>' + step.tip + '</p></div>' : '');
        }

        if (state.htmlSavedCodes.hasOwnProperty(index)) {
          state.htmlCode = state.htmlSavedCodes[index];
        } else {
          state.htmlCode = step.startingHtml || '';
        }
        if (state.cssSavedCodes.hasOwnProperty(index)) {
          state.cssCode = state.cssSavedCodes[index];
        } else {
          state.cssCode = step.startingCss || '';
        }

        if (htmlEditor) htmlEditor.value = state.htmlCode;
        if (cssEditor) cssEditor.value = state.cssCode;
        updateLineNumbers();

        if (validationMessage) validationMessage.classList.add('hidden');

        if (stepIndicator) stepIndicator.textContent = 'Step ' + (index + 1) + ' of ' + steps.length;
        if (toolbarStepTitle) toolbarStepTitle.textContent = step.title;

        updateProgressDots();
        updateLevelProgress();

        if (backBtn) backBtn.disabled = index === 0;
        if (nextBtn) {
          nextBtn.disabled = true;
          if (index === steps.length - 1) {
            nextBtn.innerHTML = '\uD83C\uDF81 Complete Level';
            nextBtn.classList.add('final');
          } else {
            nextBtn.innerHTML = 'Next Step \u2192';
            nextBtn.classList.remove('final');
          }
        }

        if (previewFrame) runCode();

        if (runBtn) runBtn.innerHTML = index === steps.length - 1 ? '\u25B6 Run Final Code' : '\u25B6 Run';

        if (index === steps.length - 1) {
          setTimeout(function() { state.validated = true; if (nextBtn) nextBtn.disabled = false; }, 300);
        }

        if (instructionsPanel) instructionsPanel.scrollTop = 0;
      };

      runCode = function() {
        if (!previewFrame) return;
        var html = state.htmlCode || '';
        var css = state.cssCode || '';
        if (!html.trim()) {
          var doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
          doc.open();
          doc.write('<html><body style="display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#999;">No code to preview</body></html>');
          doc.close();
          return;
        }
        var combined = html;
        if (css.trim()) {
          if (combined.indexOf('</head>') !== -1) {
            combined = combined.replace('</head>', '<style>\n' + css + '\n</style>\n</head>');
          } else {
            combined = combined + '\n<style>\n' + css + '\n</style>\n';
          }
        }
        var doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        doc.open();
        doc.write(combined);
        doc.close();
      };

      validateCode = function() {
        var step = steps[state.currentStep];
        if (!step) return false;
        var isValid = step.validate(state.htmlCode, state.cssCode);
        if (!validationMessage) return isValid;
        validationMessage.classList.remove('hidden', 'success', 'error');
        if (isValid) {
          validationMessage.className = 'validation-message success';
          validationMessage.innerHTML = '<span class="msg-icon">\u2713</span><span class="msg-text">' + step.successMsg + '</span>';
          state.validated = true;
          state.completedSteps[state.currentStep] = true;
          saveCompletedSteps();
          updateLevelProgress();
          if (nextBtn) nextBtn.disabled = false;
          updateProgressDots();
        } else {
          var hintText = '';
          if (step.getHint) hintText = step.getHint(state.htmlCode, state.cssCode);
          var displayMsg = hintText || step.errorMsg;
          validationMessage.className = 'validation-message error';
          validationMessage.innerHTML = '<span class="msg-icon">\u2715</span><span class="msg-text">' + displayMsg + '</span>';
          state.validated = false;
          if (nextBtn) nextBtn.disabled = true;
        }
        return isValid;
      };

      clearCode = function() {
        var step = steps[state.currentStep];
        if (!step) return;
        state.htmlCode = step.startingHtml || '';
        state.cssCode = step.startingCss || '';
        state.htmlSavedCodes[state.currentStep] = state.htmlCode;
        state.cssSavedCodes[state.currentStep] = state.cssCode;
        if (htmlEditor) htmlEditor.value = state.htmlCode;
        if (cssEditor) cssEditor.value = state.cssCode;
        updateLineNumbers();
        if (validationMessage) validationMessage.classList.add('hidden');
        state.validated = false;
        if (nextBtn) nextBtn.disabled = true;
      };

      setupEditorLineNumbers = function() {
        function handleInput() {
          if (htmlEditor) state.htmlCode = htmlEditor.value;
          if (cssEditor) state.cssCode = cssEditor.value;
          state.htmlSavedCodes[state.currentStep] = state.htmlCode;
          state.cssSavedCodes[state.currentStep] = state.cssCode;
          state.validated = false;
          if (nextBtn) nextBtn.disabled = true;
          if (validationMessage) validationMessage.classList.add('hidden');
          updateLineNumbers();
        }

        function handleTabKey(e) {
          if (e.key === 'Tab') {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;
            this.value = this.value.substring(0, start) + '  ' + this.value.substring(end);
            this.selectionStart = this.selectionEnd = start + 2;
            handleInput.call(this);
          }
        }

        if (htmlEditor) {
          htmlEditor.addEventListener('input', handleInput);
          htmlEditor.addEventListener('keydown', handleTabKey);
        }
        if (cssEditor) {
          cssEditor.addEventListener('input', handleInput);
          cssEditor.addEventListener('keydown', handleTabKey);
        }
      };

      updateLineNumbers = function() {
        if (!editorLineNumbers) return;
        var activeEl = activeFileTab === 'index.html' ? htmlEditor : cssEditor;
        var lines = activeEl ? activeEl.value.split('\n').length : 1;
        editorLineNumbers.innerHTML = '';
        for (var i = 1; i <= lines; i++) {
          var span = document.createElement('span');
          span.textContent = i;
          editorLineNumbers.appendChild(span);
        }
      };

      function syncEditorScroll() {
        if (!editorLineNumbers) return;
        var activeEl = activeFileTab === 'index.html' ? htmlEditor : cssEditor;
        if (activeEl) editorLineNumbers.scrollTop = activeEl.scrollTop;
      }

      if (htmlEditor) {
        htmlEditor.addEventListener('scroll', syncEditorScroll);
        htmlEditor.addEventListener('click', function() {
          if (activeFileTab !== 'index.html') {
            activeFileTab = 'index.html';
            if (htmlTab) htmlTab.classList.add('active');
            if (cssTab) cssTab.classList.remove('active');
            if (htmlEditor) htmlEditor.classList.add('active');
            if (cssEditor) cssEditor.classList.remove('active');
            updateLineNumbers();
          }
        });
      }

      if (cssEditor) {
        cssEditor.addEventListener('scroll', syncEditorScroll);
        cssEditor.addEventListener('click', function() {
          if (activeFileTab !== 'style.css') {
            activeFileTab = 'style.css';
            if (cssTab) cssTab.classList.add('active');
            if (htmlTab) htmlTab.classList.remove('active');
            if (cssEditor) cssEditor.classList.add('active');
            if (htmlEditor) htmlEditor.classList.remove('active');
            updateLineNumbers();
          }
        });
      }

      if (htmlTab) {
        htmlTab.addEventListener('click', function() {
          activeFileTab = 'index.html';
          htmlTab.classList.add('active');
          if (cssTab) cssTab.classList.remove('active');
          if (htmlEditor) htmlEditor.classList.add('active');
          if (cssEditor) cssEditor.classList.remove('active');
          updateLineNumbers();
        });
      }

      if (cssTab) {
        cssTab.addEventListener('click', function() {
          activeFileTab = 'style.css';
          cssTab.classList.add('active');
          if (htmlTab) htmlTab.classList.remove('active');
          if (cssEditor) cssEditor.classList.add('active');
          if (htmlEditor) htmlEditor.classList.remove('active');
          updateLineNumbers();
        });
      }
    }

    /* ===== KICK OFF ===== */
    init();
  }

});
