Vim�UnDo� u�N��>�t
"���g�8=��I��LC٘�o�   ,   S		{ name: "aqua_web_sp500_di_tax_savings_estimates_20241202", variant: "enabled" },                             g_3a    _�                        ,    ����                                                                                                                                                                                                                                                                                                                                                             g_3,     �             �             5��                          �              4       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g_3-    �               3  await assert.dashboard.clickSP500DIDisclosures();5��                         �                     �                        �                    �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                        �                    �                        �                    �                        �                    5�_�                       6    ����                                                                                                                                                                                                                                                                                                                                                             g_31    �          !      1import { test, utils, expect } from 'playwright';   :import { OwnerTeam } from 'wf_modules/src/types/e2e_test';   ]import { FAKE_ACCOUNT_TYPE, FakeAccountSubtype } from 'playwright/utils/create_fake_account';   Wimport { forceBucketInExperiments } from 'playwright/utils/force_bucket_in_experiment';�               stest(utils.testDescriptionFromFile(__dirname, __filename, OwnerTeam.AQUA), async ({ loginPage, page, assert }) => {     await loginPage.login({   I    fakeAccountParams: { subtype: FakeAccountSubtype.PERSONAL_SP500_DI },       fakeAccountOpts: {   2      fakeAccountType: FAKE_ACCOUNT_TYPE.PREPARED,       },     });   s  await forceBucketInExperiments(page, [{ name: 'aqua_web_sp500_di_review_screen_20241024', variant: 'enabled' }]);�               U  await assert.common.clickAccountInDashboardAccountList('S&P 500 Direct Portfolio');   ^  await expect(page.getByRole('heading', { name: 'S&P 500 Direct Portfolio' })).toBeVisible();   :  await assert.dashboard.navigatesToTaxSavingsEstimates();   3  await assert.dashboard.clickSP500DIDisclosures();   8  await assert.common.clickSettingsInAccountDashboard();   ;  await assert.dashboard.manageAccountChangesAccountName();   C  await assert.dashboard.manageAccountCoOwners({ showing: false });   >  await assert.dashboard.manageAccountViewsCostBasisDetails();5��                       �      �      �      �       #      p         G      |      |      �        $      V      V   $       �              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g_3P     �         $    �         $    5��                          �              L       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g_3Q     �         %      K		{ name: "aqua_web_sp500_di_review_screen_20241024", variant: "enabled" },5��              (          �      (              �                         �                     �                         �                     �                         �                     �                     0   �             0       �              0          �      0              �                     0   �             0       5�_�                       :    ����                                                                                                                                                                                                                                                                                                                                                             g_3Y     �         %    �         %    5��                                        T       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g_3Z    �         &      S		{ name: "aqua_web_sp500_di_tax_savings_estimates_20241202", variant: "enabled" },5��              0          $      0              �                         '                     �                         &                     �                         %                     �                     0   $             0       �              0          $      0              �                     0   $             0       5�_�                        :    ����                                                                                                                                                                                                                                                                                                                                                             g_3`    �         &      S		{ name: "aqua_web_sp500_di_tax_savings_estimates_20241202", variant: "enabled" },   S		{ name: "aqua_web_sp500_di_tax_savings_estimates_20241112", variant: "enabled" },5��             Q         �      �       �       5��