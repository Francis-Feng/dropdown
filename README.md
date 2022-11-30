# Dropdown Component

## Description
This repo contains the code for a reusable and customizable Dropdown component written from scratch using React.

### Required Features
- A user should be able to open and close the dropdown menu.
- The component must support a single selected option or multiple selected options.
- A user should be able to select and deselect all options at once.
- The selected option or options must be visible when the dropdown is closed.

### Additional Features
- A user can search through the list of dropdown items
- A user can remove a selected item by clicking the "x" tag

## Installation

First clone the project repo and install packages with `npm install`

In the project directory, you can run `npm start` which runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

`import Dropdown from "./Dropdown";`

### Parameters
- **defaultText** (string): a place holder string that displays in the dropdown menu when nothing is selected.
- **data** (array of pairs): an array of key value pairs where the *value* will be rendered in the dropdown list. See an example of a data input below.
- **multipleSelect** (boolean): an optional parameter that will return a dropdown component with multiple selected options enabled.
- **hasSearch** (boolean): an optional parameter that will return a dropdown component with search bar enabled.
- **onSelect** (function): a function that takes in the list of selected items as parameter. To be used in the parent component to see which options were selected.

### **Example usage**
```
const data = [
    {key: "jeff", value: "Jeff"},
    {key: "annie", value: "Annie"},
    {key: "troy", value: "Troy"},
    {key: "abed", value: "Abed"},
    {key: "britta", value: "Britta"},
    {key: "shirley", value: "Shirley"},
    {key: "pierce", value: "Pierce"},
  ];
```
### **Dropdown with Single Select and No Search**
```
<Dropdown
    defaultText="Select an option"
    data={data}
    onSelect={(selected) => console.log(selected)}
/>  
```
### **Dropdown with Single Select and Search**
```
<Dropdown
    hasSearch
    defaultText="Select an option"
    data={data}
    onSelect={(selected) => console.log(selected)}
/>
```
### **Dropdown with Multiple Select and Search**
```
<Dropdown
    multipleSelect
    hasSearch
    defaultText="Select an option"
    data={data}
    onSelect={(selected) => console.log(selected)}
/>
```
