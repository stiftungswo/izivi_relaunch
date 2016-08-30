<?php
namespace IZiviPlanningBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use JMS\Serializer\Annotation as JMS;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @UniqueEntity(fields={"username"})
 * @ORM\Table(name="users")
 * @ORM\Entity(repositoryClass="IZiviPlanningBundle\Repository\UserRepository")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="discr",type="string")
 */
class User extends BaseUser implements EntityInterface
{
    const BANK = 'BANK';
    const POST = 'POST';
    const BANK_TYPES = array(User::BANK, User::POST);
    const PASSWORD_HASH_TYPE = array('md5', 'bcrypt');

    /**
     * @var integer $id
     *
     * @JMS\Groups({"List"})
     * @ORM\Id
     * @ORM\Column(name="id", type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string $firstname
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $firstname;

    /**
     * @var string $lastname
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $lastname;

    /**
     * @var string $street
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $street;

    /**
     * @var string $postCode
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("postCode")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $postCode;

    /**
     * @var string $city
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $city;

    /**
     * @var string $birthday
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="datetime", length=255, nullable=true)
     */
    protected $birthday;

    /**
     * @var string $phone
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $phone;

    /**
     * @var string $hometown
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $hometown;

    /**
     * @var State $hometownState
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("hometownState")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $hometownState;

    /**
     * @var string $bankType
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("bankType")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $bankType;

    /**
     * @var string $accountNumber
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("accountNumber")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $accountNumber;

    /**
     * @var string $bankName
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("bankName")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $bankName;

    /**
     * @var string $clearingNumber
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("clearingNumber")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $clearingNumber;

    /**
     * @var string $iban
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $iban;

    /**
     * @var string $insuranceName
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("insuranceName")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $insuranceName;

    /**
     * @var string $insuranceNumber
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("insuranceNumber")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $insuranceNumber;

    /**
     * @var string $experience
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $experience;

    /**
     * @var boolean $driversLicence
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("driversLicence")
     * @ORM\Column(type="smallint", nullable=true)
     */
    protected $driversLicence;

    /**
     * @var string $trainTicket
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("trainTicket")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $trainTicket;

    /**
     * @var string $registrationCenter
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("registrationCenter")
     * @ORM\ManyToOne(targetEntity="IZiviPlanningBundle\Entity\RegistrationCenter")
     * @ORM\JoinColumn(name="registrationCenter_id", referencedColumnName="id", nullable=true, onDelete="SET NULL")
     */
    protected $registrationCenter;

    /**
     * @var DateTime $createdAt
     *
     * @Gedmo\Timestampable(on="create")
     * @JMS\SerializedName("createdAt")
     * @ORM\Column(name="created_at", type="datetime")
     */
    protected $createdAt;

    /**
     * @var datetime $updatedAt
     *
     * @Gedmo\Timestampable(on="update")
     * @JMS\SerializedName("updatedAt")
     * @ORM\Column(name="updated_at", type="datetime")
     */
    protected $updatedAt;

    /**
     * @return string
     */
    public function getFullname()
    {
        return $this->firstname . ' ' . $this->lastname;
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set firstname
     *
     * @param  string $firstname
     * @return User
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname
     *
     * @return string
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set lastname
     *
     * @param  string $lastname
     * @return User
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Get lastname
     *
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * @return string
     */
    public function getStreet()
    {
        return $this->street;
    }

    /**
     * @param string $street
     */
    public function setStreet($street)
    {
        $this->street = $street;
    }

    /**
     * @return string
     */
    public function getPostCode()
    {
        return $this->postCode;
    }

    /**
     * @param string $postCode
     */
    public function setPostCode($postCode)
    {
        $this->postCode = $postCode;
    }

    /**
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param datetime $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /**
     * @return datetime
     */
    public function getBirthday()
    {
        return $this->birthday;
    }

    /**
     * @param string $birthday
     */
    public function setBirthday($birthday)
    {
        $this->birthday = $birthday;
    }

    /**
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param string $phone
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /**
     * @return string
     */
    public function getHometown()
    {
        return $this->hometown;
    }

    /**
     * @param string $hometown
     */
    public function setHometown($hometown)
    {
        $this->hometown = $hometown;
    }

    /**
     * @return State
     */
    public function getHometownState()
    {
        return $this->hometownState;
    }

    /**
     * @param State $hometownState
     */
    public function setHometownState($hometownState)
    {
        $this->hometownState = $hometownState;
    }

    /**
     * @return string
     */
    public function getBankType()
    {
        return $this->bankType;
    }

    /**
     * @param string $bankType
     */
    public function setBankType($bankType)
    {
        $this->bankType = $bankType;
    }

    /**
     * @return string
     */
    public function getAccountNumber()
    {
        return $this->accountNumber;
    }

    /**
     * @param string $accountNumber
     */
    public function setAccountNumber($accountNumber)
    {
        $this->accountNumber = $accountNumber;
    }

    /**
     * @return string
     */
    public function getBankName()
    {
        return $this->bankName;
    }

    /**
     * @param string $bankName
     */
    public function setBankName($bankName)
    {
        $this->bankName = $bankName;
    }

    /**
     * @return string
     */
    public function getClearingNumber()
    {
        return $this->clearingNumber;
    }

    /**
     * @param string $clearingNumber
     */
    public function setClearingNumber($clearingNumber)
    {
        $this->clearingNumber = $clearingNumber;
    }

    /**
     * @return string
     */
    public function getIban()
    {
        return $this->iban;
    }

    /**
     * @param string $iban
     */
    public function setIban($iban)
    {
        $this->iban = $iban;
    }

    /**
     * @return string
     */
    public function getInsuranceName()
    {
        return $this->insuranceName;
    }

    /**
     * @param string $insuranceName
     */
    public function setInsuranceName($insuranceName)
    {
        $this->insuranceName = $insuranceName;
    }

    /**
     * @return string
     */
    public function getInsuranceNumber()
    {
        return $this->insuranceNumber;
    }

    /**
     * @param string $insuranceNumber
     */
    public function setInsuranceNumber($insuranceNumber)
    {
        $this->insuranceNumber = $insuranceNumber;
    }

    /**
     * @return string
     */
    public function getExperience()
    {
        return $this->experience;
    }

    /**
     * @param string $experience
     */
    public function setExperience($experience)
    {
        $this->experience = $experience;
    }

    /**
     * @return boolean
     */
    public function isDriversLicence()
    {
        return $this->driversLicence;
    }

    /**
     * @param boolean $driversLicence
     */
    public function setDriversLicence($driversLicence)
    {
        $this->driversLicence = $driversLicence;
    }

    /**
     * @return string
     */
    public function getTrainTicket()
    {
        return $this->trainTicket;
    }

    /**
     * @param string $trainTicket
     */
    public function setTrainTicket($trainTicket)
    {
        $this->trainTicket = $trainTicket;
    }

    /**
     * @return string
     */
    public function getRegistrationCenter()
    {
        return $this->registrationCenter;
    }

    /**
     * @param string $registrationCenter
     */
    public function setRegistrationCenter($registrationCenter)
    {
        $this->registrationCenter = $registrationCenter;
    }

    /**
     * Get created at datetime
     *
     * @return datetime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Get updated at datetime
     *
     * @return datetime
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * get user as string
     *
     * @return string
     */
    public function __toString()
    {
        $user = trim($this->getFirstname() . ' ' . $this->getLastname());

        if (empty($user)) {
            $user = $this->getId();
        }
        if (!is_string($user)) {
            $user = strval($user);
        }
        return $user;
    }
}