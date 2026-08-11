// VULN-20: OS command execution
import { exec } from 'node:child_process';
exec(userInput);

// VULN-21: eval
const result = eval(userInput);

// VULN-22: new Function
const dynamic = new Function(userInput);

// VULN-23: innerHTML XSS sink
element.innerHTML = userInput;

// VULN-24: React dangerous HTML
const view = <div dangerouslySetInnerHTML={{ __html: userInput }} />;

// VULN-25: document.write
 document.write(userInput);
