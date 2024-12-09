# Modal Form for Contact Management

## Overview

This project uses a **modal form** for creating and updating contacts in the Contacts Management Application. The modal provides an intuitive user interface for entering and editing contact details.

### Key Features:

- **Create a new contact**: Opens a modal with a form for adding a new contact's details.
- **Edit an existing contact**: Opens the modal with pre-filled details for an existing contact.
  
### Form Controls:

- **First Name**: Required field.
- **Last Name**: Required field.
- **Email**: Required field (must be a valid email format).

### Actions:

- **Save**: Submits the form to create or update a contact. The backend will handle saving or updating the contact details.
- **Close**: Cancels the action and closes the modal without saving any changes.

## Functionality

- The modal is triggered by button actions, such as "Add Contact" or "Edit".
- The modal is implemented using **Bootstrap's modal component**, ensuring a responsive and clean design.
- The form uses **Reactive Forms** for validation and submission.

## Notes:

- Ensure **Bootstrap** is integrated for proper styling of the modal.
- The modal form interacts with the backend API to create or update contacts via HTTP requests.
