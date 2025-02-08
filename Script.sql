CREATE PROCEDURE InsertCentral
    @name_central NVARCHAR(100),
    @address_central NVARCHAR(100),
    @phone_central NVARCHAR(20),
    @email_central NVARCHAR(100)
AS
BEGIN
    INSERT INTO CENTRALS (name_central, address_centrral, phone_central, email_central, CREATED_DATE, UPDATED_DATE)
    VALUES (@name_central, @address_central, @phone_central, @email_central, GETDATE(), GETDATE());
END
GO

CREATE PROCEDURE InsertBranch
    @code_branch NVARCHAR(10),
    @name_branch NVARCHAR(100),
    @address_branch NVARCHAR(100),
    @phone_branch NVARCHAR(20),
    @email_branch NVARCHAR(100),
    @id_central_branch INT
AS
BEGIN
    INSERT INTO BRANCHES (code_branch, name_branch, address_branch, phone_branch, email_branch, id_central_branch, CREATED_DATE, UPDATED_DATE)
    VALUES (@code_branch, @name_branch, @address_branch, @phone_branch, @email_branch, @id_central_branch, GETDATE(), GETDATE());
END
GO

CREATE PROCEDURE InsertATM
    @code_atm NVARCHAR(10),
    @name_atm NVARCHAR(100),
    @address_atm NVARCHAR(100),
    @phone_atm NVARCHAR(20),
    @email_atm NVARCHAR(100),
    @id_branch_atm INT
AS
BEGIN
    INSERT INTO ATMS (code_atm, name_atm, address_atm, phone_atm, email_atm, id_branch_atm, CREATED_DATE, UPDATED_DATE)
    VALUES (@code_atm, @name_atm, @address_atm, @phone_atm, @email_atm, @id_branch_atm, GETDATE(), GETDATE());
END
GO

CREATE PROCEDURE InsertAccountHolder
    @name_account_holder NVARCHAR(100),
    @address_account_holder NVARCHAR(100),
    @phone_account_holder NVARCHAR(20),
    @email_account_holder NVARCHAR(100)
AS
BEGIN
    INSERT INTO ACCOUNTS_HOLDERS (name_account_holder, address_account_holder, phone_account_holder, email_account_holder, CREATED_DATE, UPDATED_DATE)
    VALUES (@name_account_holder, @address_account_holder, @phone_account_holder, @email_account_holder, GETDATE(), GETDATE());
END
GO

CREATE PROCEDURE InsertAccount
    @number_account NVARCHAR(10),
    @type_account NVARCHAR(10),
    @currency_account NVARCHAR(10),
    @balance_account DECIMAL(18, 2),
    @id_account_holder_account INT,
    @id_branch_account INT
AS
BEGIN
    INSERT INTO ACCOUNTS (number_account, type_account, currency_account, balance_account, id_account_holder_account, id_branch_account, CREATED_DATE, UPDATED_DATE)
    VALUES (@number_account, @type_account, @currency_account, @balance_account, @id_account_holder_account, @id_branch_account, GETDATE(), GETDATE());
END
GO

CREATE PROCEDURE InsertTransaction
    @type_transaction NVARCHAR(10),
    @amount_transaction DECIMAL(18, 2),
    @id_account_transaction INT,
    @id_atm_transaction INT
AS
BEGIN
    INSERT INTO Transacctions (type_transaction, amount_transaction, id_account_transaction, id_atm_transaction, CREATED_DATE, UPDATED_DATE)
    VALUES (@type_transaction, @amount_transaction, @id_account_transaction, @id_atm_transaction, GETDATE(), GETDATE());
END
GO

CREATE PROCEDURE GetAccountByNumber
    @number_account NVARCHAR(10)
AS
BEGIN
    SELECT * FROM ACCOUNTS WHERE number_account = @number_account;
END
GO

CREATE PROCEDURE GetTransactionsByAccount
    @id_account_transaction INT
AS
BEGIN
    SELECT * FROM Transacctions WHERE id_account_transaction = @id_account_transaction;
END
GO

CREATE PROCEDURE UpdateAccountBalance
    @id_account INT,
    @new_balance DECIMAL(18, 2)
AS
BEGIN
    UPDATE ACCOUNTS
    SET balance_account = @new_balance, UPDATED_DATE = GETDATE()
    WHERE id_account = @id_account;
END
GO

CREATE PROCEDURE DeleteAccount
    @id_account INT
AS
BEGIN
    DELETE FROM ACCOUNTS WHERE id_account = @id_account;
END
GO

CREATE PROCEDURE GetAllCentrals
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT id_central, name_central, address_centrral, phone_central, email_central, CREATED_DATE, UPDATED_DATE
    FROM CENTRALS;
END
GO

select * from atms;