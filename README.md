# StudyFeast Sign-up Form

Welcome to the StudyFeast sign-up form project! This simple web page represents an imaginary cafeteria management app where users can sign up for an account.

## Features

1. **Dual Layout Design:**

   - The screen is vertically divided into two halves.
   - The first half features a captivating background image with a semi-transparent and dark "StudyFeast" caption.
   - Credit to the image creator on Unsplash is provided at the bottom.

2. **Informative Content:**

   - The second half is horizontally divided into three sections.
   - The first section contains a brief description of what "StudyFeast" is.
   - The second section houses a sign-up form with fields for first name, last name, email, phone number, password, and confirm password.

3. **Form Styling:**

   - Input fields have `appearance: none` to allow for custom border styling.
   - A `:focus` pseudo-class gives the fields a blue border and box shadow when clicked.

4. **Password Validation:**

   - Both password fields have the `required` attribute for basic form validation.
   - JavaScript is used to dynamically check if the passwords match and display a message accordingly.

5. **Create Account Button:**

   - The third section contains a "Create Account" button outside the form.
   - The button is linked to the form using `type="submit"` and `form="signup"` attributes.
   - `form="signup"` corresponds to the `id` given to the form, allowing seamless linkage between the button and the form even when placed outside.

   Example HTML:

   ```html
   <button type="submit" value="Submit" form="signup">Create Account</button>
   ```

6. **Log In Link:**

   - A link is provided for users who already have an account, currently pointing to Google.com as a placeholder.

## Credits

- Background image by [Victoria Shes on Unsplash](https://unsplash.com/@victoriakosmo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).
  - [View Image](https://unsplash.com/photos/grilled-meat-and-vegetable-on-the-table-UC0HZdUitWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/ManjotSinghJolly/sign-up-form.git
   ```
