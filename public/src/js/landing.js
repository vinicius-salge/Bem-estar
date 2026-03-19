/**
 * Espaço Bem Estar - Landing Page JavaScript
 * Casa de Repouso Feminina - Uberlândia/MG
 */

(function() {
    'use strict';

    // ==========================================
    // UTILITÁRIOS
    // ==========================================
    
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);
    
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // ==========================================
    // NAVEGAÇÃO
    // ==========================================
    
    const initNavigation = () => {
        const header = $('#header');
        const mobileBtn = $('#mobileMenuBtn');
        const navMenu = $('#navMenu');
        const navLinks = $$('.nav-link');
        
        // Header scroll effect
        let lastScroll = 0;
        
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        };
        
        window.addEventListener('scroll', debounce(handleScroll, 10), { passive: true });
        
        // Mobile menu toggle
        if (mobileBtn && navMenu) {
            mobileBtn.addEventListener('click', () => {
                const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
                mobileBtn.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('active');
                
                // Toggle icon
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
            });
            
            // Close menu on link click
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    mobileBtn.setAttribute('aria-expanded', 'false');
                    const icon = mobileBtn.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                });
            });
        }
        
        // Smooth scroll para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = $(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = header?.offsetHeight || 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Active link on scroll
        const sections = $$('section[id]');
        
        const updateActiveLink = () => {
            const scrollPos = window.pageYOffset + (header?.offsetHeight || 80) + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };
        
        window.addEventListener('scroll', debounce(updateActiveLink, 50), { passive: true });
    };

    // ==========================================
    // ANIMAÇÕES SCROLL
    // ==========================================
    
    const initScrollAnimations = () => {
        const animatedElements = $$('.card, .feature-item, .structure-card, .contact-item');
        
        animatedElements.forEach(el => {
            el.classList.add('animate-on-scroll');
        });
        
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => observer.observe(el));
    };

    // ==========================================
    // FORMULÁRIO DE CONTATO
    // ==========================================
    
    const initContactForm = () => {
        const form = $('#contactForm');
        if (!form) return;
        
        // Máscara para telefone
        const phoneInput = $('#telefone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 11) value = value.slice(0, 11);
                
                if (value.length > 7) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                } else if (value.length > 2) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else if (value.length > 0) {
                    value = `(${value}`;
                }
                
                e.target.value = value;
            });
        }
        
        // Validação e envio
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Validação básica
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                const formGroup = field.closest('.form-group');
                const existingError = formGroup?.querySelector('.form-error');
                
                if (existingError) existingError.remove();
                field.classList.remove('error');
                
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    const error = document.createElement('span');
                    error.className = 'form-error';
                    error.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Este campo é obrigatório';
                    formGroup.appendChild(error);
                }
            });
            
            if (!isValid) return;
            
            // Simulação de envio
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
            
            // Simula delay de envio
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Feedback de sucesso
            submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Enviado com sucesso!';
            submitBtn.classList.remove('btn-primary');
            submitBtn.classList.add('btn-success');
            
            // Reset após 3 segundos
            setTimeout(() => {
                form.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.classList.add('btn-primary');
                submitBtn.classList.remove('btn-success');
                
                // Limpa erros
                form.querySelectorAll('.form-error').forEach(el => el.remove());
                form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            }, 3000);
        });
        
        // Limpa erro ao digitar
        form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                const formGroup = this.closest('.form-group');
                const error = formGroup?.querySelector('.form-error');
                if (error) error.remove();
            });
        });
    };

    // ==========================================
    // PARALLAX SUAVE
    // ==========================================
    
    const initParallax = () => {
        const heroPattern = $('.hero-pattern');
        if (!heroPattern) return;
        
        let ticking = false;
        
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            heroPattern.style.transform = `translateY(${rate}px)`;
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick, { passive: true });
    };

    // ==========================================
    // PRELOADER (opcional)
    // ==========================================
    
    const initPreloader = () => {
        // Simula carregamento suave
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
    };

    // ==========================================
    // BOTÃO WHATSAPP - Animação de pulso
    // ==========================================
    
    const initWhatsAppPulse = () => {
        const whatsappBtn = $('.whatsapp-float');
        if (!whatsappBtn) return;
        
        // Pulsos a cada 10 segundos
        setInterval(() => {
            whatsappBtn.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                whatsappBtn.style.animation = '';
            }, 1000);
        }, 10000);
    };

    // ==========================================
    // ACESSIBILIDADE - Skip link
    // ==========================================
    
    const initAccessibility = () => {
        // Verifica preferência de reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            document.documentElement.style.setProperty('--duration-normal', '0ms');
            document.documentElement.style.setProperty('--duration-slow', '0ms');
        }
        
        // Tecla Escape fecha menu mobile
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navMenu = $('#navMenu');
                const mobileBtn = $('#mobileMenuBtn');
                
                if (navMenu?.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileBtn?.setAttribute('aria-expanded', 'false');
                    const icon = mobileBtn?.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
            }
        });
    };

    // ==========================================
    // CONTADOR ANIMADO (opcional)
    // ==========================================
    
    const initCounters = () => {
        const counters = $$('.stat-number');
        
        const animateCounter = (el) => {
            const text = el.textContent;
            const hasPlus = text.includes('+');
            const hasH = text.includes('h');
            const hasPercent = text.includes('%');
            
            const num = parseInt(text.replace(/\D/g, ''));
            if (isNaN(num)) return;
            
            const duration = 2000;
            const steps = 60;
            const increment = num / steps;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= num) {
                    current = num;
                    clearInterval(timer);
                }
                
                let display = Math.floor(current);
                if (hasPlus) display = '+' + display;
                if (hasH) display = display + 'h';
                if (hasPercent) display = display + '%';
                
                el.textContent = display;
            }, duration / steps);
        };
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => observer.observe(counter));
    };

    // ==========================================
    // INICIALIZAÇÃO
    // ==========================================
    
    const init = () => {
        initPreloader();
        initNavigation();
        initScrollAnimations();
        initContactForm();
        initParallax();
        initWhatsAppPulse();
        initAccessibility();
        initCounters();
    };

    // Aguarda DOM estar pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
