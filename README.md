# Seia-Soto/Bequoted

> This project is always in *working on* state.

Chatbot, A simple map of functions for ease of life.

## Table of Contents

- [Introduction](#Introduction)
- [Development](#Development)

----

# Introduction

Since the goal of this application are multi-platform(used the word `providers` in this project) and highly-expandable chat bot, so I am going to focus on logics of the system not commands.
Also, not only this project, I've created and coded a lot of command-less(chat bot with initial state, which isn't including command sets I made) chat bot systems to show the structure of chat bot I made.
Like those chat bot ecosystems, this repository will only include the logics or commands I want to handle.

## About multi-platform chat bot

What I want to archive in this project is multi-platform.
So, I want to attach some description.
Commonly, people don't use one social platform to talk with their friends.
However, if there is some issues the messenger which they use, people need to move their platform and this is why I thought that chat bot need to provide multi-platform function.
Finally, I've created this project and want to research about how this can be possible without(or maybe less-stressful) stressful works such as integrating the different API.

## Possible ways for multi-platform chat bot

> Before, you code or develop this ecosystem, I recommend you to read this section.

I thought some methods to create multi-platform chat bot.

1. Divide the command sets and run commands in each environments.
2. Integrate some similar parts such as sending message and make the things which is only method for platform not work and ignore errors. (planed in this project)
3. Integrate protocol, method, or functions for different platforms.

As the number of the item increases, you can see that the difficulty to code command is decreasing and the level of integration is increasing.
However, in last method to make multi-platform chat bot, we need to design all methods in integrated state per platform API and this work ~~really sucks~~ because need a lot of time.
Also, as API spec changes, we need to update every time.
Maybe **this project will use method 2** which a lot of other multi-platform related things using.
For example, following libraries is doing nice thing to implement multi-platform and works really well.

- Electron.JS
- Knex.JS

## The plan

I am going to integrate a lot of parts that can be worked in *out application level*, not platform API or such libraries to reduce the time to code and use existing API libraries like [Eris](https://github.com/abalabahaha/eris) for [Discord](https://discord.com).

| Level | Integration & Normalization level |
| :------------- | :------------- |
| API level | Use library to implement |
| Application level | Share functions for common works* (Normalization required per platform) |
| Command level | Providing integrated API internally is optional but will work some parts to avoid causing errors when function executed in unsupported platform |

> **What is common works**
>
> Common works are *really* common works that chat bots in different platform shares such as parsing message into *prefix, command, args*.

# Development

This section will describe about the development of this repository.

## Environment

This project will be managed and coded with JavaScript(not TypeScript) with Node.JS.

- Node.JS with latest LTS release
- NPM
- Some trusted(not causing major issues) libraries that can be used in large environment

### The compatibility with early releases of Node.JS

Using the latest LTS release of Node.JS isn't meaning that I am not caring the early releases of Node.JS.
However, they're old and to earn the performance I am encouraging later release.
I won't test about the coverage in early-releases, however, most code will work in v10 or later releases.
