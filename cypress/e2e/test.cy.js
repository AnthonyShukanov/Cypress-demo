describe('Radzima test task', () => {
    it('test1', () => {
        cy.visit('https://admin-dev.radzima.app/login#/');
        cy.get('#amplify-id-0').type('radzima_candidate@yopmail.com');
        cy.get('#amplify-id-2').type('Radzima#candidate-1007');
        cy.get('.amplify-button--primary').click();
        cy.get('[href*=object]').click();
        cy.get('.filter-buttons-wrapper > .ant-btn-link').click();
        cy.get('.ant-input').type('Automation_anton_1');
        cy.get('.ant-col-10 > :nth-child(1) > :nth-child(1)').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_1')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').click();
        cy.get('[role="menuitem"]').contains('Фонтаны').click({ force: true });
        cy.get('[role="menuitem"]').contains('Исторические').click({ force: true });
        cy.get('[aria-label="save"]').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_1')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('[data-testid="tag"]').should('have.text', 'Черновик');
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').should('have.text', 'Исторические ')
    })

    it('test2', () => {
        cy.visit('https://admin-dev.radzima.app/login#/');
        cy.get('#amplify-id-0').type('radzima_candidate@yopmail.com');
        cy.get('#amplify-id-2').type('Radzima#candidate-1007');
        cy.get('.amplify-button--primary').click();
        cy.get('[href*=object]').click();
        cy.get('.filter-buttons-wrapper > .ant-btn-link').click();
        cy.get('.ant-input').type('Automation_anton_2');
        cy.get('.ant-col-10 > :nth-child(1) > :nth-child(1)').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_2')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').click();
        cy.get('[role="menuitem"]').contains('Фонтаны').click({ force: true });
        cy.get('[role="menuitem"]').contains('Исторические').click({ force: true });
        cy.get('[aria-label="save"]').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_2')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('[data-testid="tag"]').should('have.text', 'Черновик');
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').should('have.text', 'Исторические ')
    })

    it('test3', () => {
        cy.visit('https://admin-dev.radzima.app/login#/');
        cy.get('#amplify-id-0').type('radzima_candidate@yopmail.com');
        cy.get('#amplify-id-2').type('Radzima#candidate-1007');
        cy.get('.amplify-button--primary').click();
        cy.get('[href*=object]').click();
        cy.get('.filter-buttons-wrapper > .ant-btn-link').click();
        cy.get('.ant-input').type('Automation_anton_3');
        cy.get('.ant-col-10 > :nth-child(1) > :nth-child(1)').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_3')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').click();
        cy.get('[role="menuitem"]').contains('Фонтаны').click({ force: true });
        cy.get('[role="menuitem"]').contains('Исторические').click({ force: true });
        cy.get('[aria-label="save"]').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_3')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('[data-testid="tag"]').should('have.text', 'Черновик');
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').should('have.text', 'Исторические ')
    })

    it('test2', () => {
        cy.visit('https://admin-dev.radzima.app/login#/');
        cy.get('#amplify-id-0').type('radzima_candidate@yopmail.com');
        cy.get('#amplify-id-2').type('Radzima#candidate-1007');
        cy.get('.amplify-button--primary').click();
        cy.get('[href*=object]').click();
        cy.get('.filter-buttons-wrapper > .ant-btn-link').click();
        cy.get('.ant-input').type('Automation_anton_4');
        cy.get('.ant-col-10 > :nth-child(1) > :nth-child(1)').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_4')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').click();
        cy.get('[role="menuitem"]').contains('Фонтаны').click({ force: true });
        cy.get('[role="menuitem"]').contains('Исторические').click({ force: true });
        cy.get('[aria-label="save"]').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_4')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('[data-testid="tag"]').should('have.text', 'Черновик');
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').should('have.text', 'Исторические ')
    })

    it('test2', () => {
        cy.visit('https://admin-dev.radzima.app/login#/');
        cy.get('#amplify-id-0').type('radzima_candidate@yopmail.com');
        cy.get('#amplify-id-2').type('Radzima#candidate-1007');
        cy.get('.amplify-button--primary').click();
        cy.get('[href*=object]').click();
        cy.get('.filter-buttons-wrapper > .ant-btn-link').click();
        cy.get('.ant-input').type('Automation_anton_5');
        cy.get('.ant-col-10 > :nth-child(1) > :nth-child(1)').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_5')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').click();
        cy.get('[role="menuitem"]').contains('Фонтаны').click({ force: true });
        cy.get('[role="menuitem"]').contains('Исторические').click({ force: true });
        cy.get('[aria-label="save"]').click();
        cy.get('.ant-list-item')
            .should('contain', 'Automation_anton_5')
            .find('[data-icon*=edit]')
            .first()
            .click();
        cy.get('[data-testid="tag"]').should('have.text', 'Черновик');
        cy.get('.ant-page-header-heading-sub-title > span.obj-category-dropdown').should('have.text', 'Исторические ')
    })
})