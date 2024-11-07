import { Resend } from 'resend';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resend = new Resend('re_Pm4JDBci_JqGZez7Htnm3ngHraZoXoAuz');

try {
  const htmlContent = fs.readFileSync(join(__dirname, 'index.html'), 'utf-8');
  
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['ortegaleonel1301@gmail.com'],
    subject: 'Customer Scoops Mail',
    html: htmlContent,
  });

  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', data);
  }
} catch (err) {
  console.error('Error reading file or sending email:', err);
}