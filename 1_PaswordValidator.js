function passwordValidation(enterPassword, confirmPassword)
{
    return enterPassword === confirmPassword ? "Password Matched. Password validation Successful." : "Password didn't match. Password validation unsuccessful";
}

console.log(passwordValidation('hi','hi'));