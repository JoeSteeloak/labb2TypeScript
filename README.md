#Labb 2 Typescript#

en uppgift för kursen DT208G - Programmering i TypeScript på Mittuniversitetet i Sundsvall. Appen ska lagra en enkel "att-göra"-lista i LocalStorage och använda TypeScript.
Målet är en djupare förståelse för objektsorienterad programmering.
Majoriteten av HTML-en skapas i TypeScript med hjälp av en interface i iTodo.ts som sen exporteras till Todo.ts där en klass skapas för att lagra todo-uppgifterna.
Variablerna är privata medan metoderna för att manipulera dem är publika.
Todo.ts exporteras sen till main.ts där själva DOM-manipulationen utförs för att ta emot uppgifter med en beskrivning och prioritet och sen skapas en funktion för att markera dem 
som avslutade eller ej. 
Med CSS stylas sidan och prioriteringen av todo-uppgifterna stylas så de med högst prio (1) skrivs ut i all-caps och de med lägst prio (3) blir gråare och mindre.
CSS-styling används också för att ge sidan en "notepad"-känsla för att matcha to do list känslan.
