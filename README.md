
# Checkmint

Checkmint is a chrome extension that replays students writing process, while also hlighing any text copied from a external source


## Demo 👀
It is not finsihed as I just started learning React, so check back on me soon :) There are still some bugs and issues. 



https://github.com/user-attachments/assets/2577769b-39e3-4cb5-84b1-e9b31217ea74



The pannel in the middle is the real time replay of the students wirting, and the pannel to the side is all the text that was copied from a external source
## Introduction 

While talking with my English teacher, she mentioned how there were some issues that she faced with a chrome extension. After a while of scearhing online, I could not find an open source version to contribute to. Hence, the logical reason was ofcource to make it myself but open SOURCEEEE!!!!

The Aim of the project is to make a open source google chrome extension that helps teachers with idenfity the use AI by making it more simple and accurate using GPT ZERO and the google docs api.  
## Getting Started

To deploy run this chrome extension

```bash
  pnpm dev
```
Open your browser and head over to the google chrome extension tab (chrome://extensions/) Turn on "Developer mode". Then click on "Load unpack" and select the chrome-mv3-dev folder.

Does not work? 
Check click here: https://docs.plasmo.com/framework



## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Tech Stack

**Libraires:** React, Plasmo, TailwindCSS

How does it work?
The when a google docs page is first opened, a background worker makes a fetch request to google docs to get the edit history. The edit history is parsed and organized into a json, which is used when the button is clicked on to open a new react tab. 



## Feedback

If you have any feedback, please reach out to me on slackkk (James Cao)



Other stuff for me later :)

To DO
- Change the Manifest for the production build
- https://readme.so/editor make the readme look better
- 

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).


## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
# checkment1.0

