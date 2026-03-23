package bankapp.banking.app;

import banking.app.banking.model.Account;

public interface AccountRepository {

    Account findById(int accountNumber);

    void save(Account account);
}
