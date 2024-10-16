
export interface ValidationResult {
    isValid: boolean;
    error?: string;
}

export const validateFirstname = (firstname: string): ValidationResult => {
    if (!firstname.trim()) {
        return { isValid: false, error: 'Le prénom est requis' };
    }
    if (firstname.length < 2) {
        return { isValid: false, error: 'Le prénom doit contenir au moins 2 caractères' };
    }
    return { isValid: true };
};

export const validateLastname = (lastname: string): ValidationResult => {
    if (!lastname.trim()) {
        return { isValid: false, error: 'Le nom est requis' };
    }
    if (lastname.length < 2) {
        return { isValid: false, error: 'Le nom doit contenir au moins 2 caractères' };
    }
    return { isValid: true };
};

export const validateEmail = (email: string): ValidationResult => {
    if (!email.trim()) {
        return { isValid: false, error: 'L\'email est requis' };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { isValid: false, error: 'L\'email n\'est pas valide' };
    }
    return { isValid: true };
};

export const validatePassword = (password: string): ValidationResult => {
    if (!password) {
        return { isValid: false, error: 'Le mot de passe est requis' };
    }
    if (password.length < 12) {
        return { isValid: false, error: 'Le mot de passe doit contenir au moins 12 caractères' };
    }
    if (!/[a-z]/.test(password)) {
        return { isValid: false, error: 'Le mot de passe doit contenir au moins une lettre minuscule' };
    }
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, error: 'Le mot de passe doit contenir au moins une lettre majuscule' };
    }
    if (!/\d/.test(password)) {
        return { isValid: false, error: 'Le mot de passe doit contenir au moins un chiffre' };
    }
    if (!/[@$!%*?&]/.test(password)) {
        return { isValid: false, error: 'Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&)' };
    }
    return { isValid: true };
};