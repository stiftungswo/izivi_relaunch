<?php

namespace IZiviPlanningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;
use Money\Money;

/**
 * Code
 *
 * @ORM\Table(name="tenders")
 * @ORM\Entity(repositoryClass="IZiviPlanningBundle\Repository\TenderRepository")
 */
class Tender extends Entity implements EntityInterface
{
    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(name="name", type="string", length=255)
     */
    public $name;

    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(name="shortCode", type="string", length=50)
     */
    public $shortCode;

    /**
     * @var Money
     * @ORM\Column(name="working_clothes_expense", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("workingClothesExpense")
     * @JMS\Type(name="Money")
     */
    protected $workingClothesExpense;

    /**
     * @var Money
     * @ORM\Column(name="working_breakfast_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("workingBreakfastExpenses")
     * @JMS\Type(name="Money")
     */
    protected $workingBreakfastExpenses;

    /**
     * @var Money
     * @ORM\Column(name="working_lunch_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("workingLunchExpenses")
     * @JMS\Type(name="Money")
     */
    protected $workingLunchExpenses;

    /**
     * @var Money
     * @ORM\Column(name="working_dinner_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("workingDinnerExpenses")
     * @JMS\Type(name="Money")
     */
    protected $workingDinnerExpenses;

    /**
     * @var Money
     * @ORM\Column(name="sparetime_breakfast_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("sparetimeBreakfastExpenses")
     * @JMS\Type(name="Money")
     */
    protected $sparetimeBreakfastExpenses;

    /**
     * @var Money
     * @ORM\Column(name="sparetime_lunch_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("sparetimeLunchExpenses")
     * @JMS\Type(name="Money")
     */
    protected $sparetimeLunchExpenses;

    /**
     * @var Money
     * @ORM\Column(name="sparetime_dinner_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("sparetimeDinnerExpenses")
     * @JMS\Type(name="Money")
     */
    protected $sparetimeDinnerExpenses;

    /**
     * @var Money
     * @ORM\Column(name="firstday_breakfast_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("firstdayBreakfastExpenses")
     * @JMS\Type(name="Money")
     */
    protected $firstdayBreakfastExpenses;

    /**
     * @var Money
     * @ORM\Column(name="firstday_lunch_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("firstdayLunchExpenses")
     * @JMS\Type(name="Money")
     */
    protected $firstdayLunchExpenses;

    /**
     * @var Money
     * @ORM\Column(name="firstday_dinner_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("firstdayDinnerExpenses")
     * @JMS\Type(name="Money")
     */
    protected $firstdayDinnerExpenses;

    /**
     * @var Money
     * @ORM\Column(name="lastday_breakfast_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("lastdayBreakfastExpenses")
     * @JMS\Type(name="Money")
     */
    protected $lastdayBreakfastExpenses;

    /**
     * @var Money
     * @ORM\Column(name="lastday_lunch_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("lastdayLunchExpenses")
     * @JMS\Type(name="Money")
     */
    protected $lastdayLunchExpenses;

    /**
     * @var Money
     * @ORM\Column(name="lastday_dinner_expenses", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("lastdayDinnerExpenses")
     * @JMS\Type(name="Money")
     */
    protected $lastdayDinnerExpenses;

    /**
     * @var double
     * @ORM\Column(name="working_time_weekly", type="decimal", nullable=true, precision=4, scale=2)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("workingTimeWeekly")
     * @JMS\Type(name="double")
     */
    protected $workingTimeWeekly;

    /**
     * @var Money
     * @ORM\Column(name="accommodation", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("accommodation")
     * @JMS\Type(name="Money")
     */
    protected $accommodation;

    /**
     * @var Money
     * @ORM\Column(name="pocket_money", type="money", nullable=true)
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("pocketMoney")
     * @JMS\Type(name="Money")
     */
    protected $pocketMoney;

    /**
     * @var boolean
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("active")
     * @ORM\Column(type="smallint", nullable=true)
     */
    protected $active;

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getShortCode()
    {
        return $this->shortCode;
    }

    /**
     * @param string $shortCode
     */
    public function setShortCode($shortCode)
    {
        $this->shortCode = $shortCode;
    }

    /**
     * @return Money
     */
    public function getWorkingClothesExpense()
    {
        return $this->workingClothesExpense;
    }

    /**
     * @param Money $workingClothesExpense
     */
    public function setWorkingClothesExpense($workingClothesExpense)
    {
        $this->workingClothesExpense = $workingClothesExpense;
    }

    /**
     * @return Money
     */
    public function getWorkingBreakfastExpenses()
    {
        return $this->workingBreakfastExpenses;
    }

    /**
     * @param Money $workingBreakfastExpenses
     */
    public function setWorkingBreakfastExpenses($workingBreakfastExpenses)
    {
        $this->workingBreakfastExpenses = $workingBreakfastExpenses;
    }

    /**
     * @return Money
     */
    public function getWorkingLunchExpenses()
    {
        return $this->workingLunchExpenses;
    }

    /**
     * @param Money $workingLunchExpenses
     */
    public function setWorkingLunchExpenses($workingLunchExpenses)
    {
        $this->workingLunchExpenses = $workingLunchExpenses;
    }

    /**
     * @return Money
     */
    public function getWorkingDinnerExpenses()
    {
        return $this->workingDinnerExpenses;
    }

    /**
     * @param Money $workingDinnerExpenses
     */
    public function setWorkingDinnerExpenses($workingDinnerExpenses)
    {
        $this->workingDinnerExpenses = $workingDinnerExpenses;
    }

    /**
     * @return Money
     */
    public function getSparetimeBreakfastExpenses()
    {
        return $this->sparetimeBreakfastExpenses;
    }

    /**
     * @param Money $sparetimeBreakfastExpenses
     */
    public function setSparetimeBreakfastExpenses($sparetimeBreakfastExpenses)
    {
        $this->sparetimeBreakfastExpenses = $sparetimeBreakfastExpenses;
    }

    /**
     * @return Money
     */
    public function getSparetimeLunchExpenses()
    {
        return $this->sparetimeLunchExpenses;
    }

    /**
     * @param Money $sparetimeLunchExpenses
     */
    public function setSparetimeLunchExpenses($sparetimeLunchExpenses)
    {
        $this->sparetimeLunchExpenses = $sparetimeLunchExpenses;
    }

    /**
     * @return Money
     */
    public function getSparetimeDinnerExpenses()
    {
        return $this->sparetimeDinnerExpenses;
    }

    /**
     * @param Money $sparetimeDinnerExpenses
     */
    public function setSparetimeDinnerExpenses($sparetimeDinnerExpenses)
    {
        $this->sparetimeDinnerExpenses = $sparetimeDinnerExpenses;
    }

    /**
     * @return Money
     */
    public function getFirstdayBreakfastExpenses()
    {
        return $this->firstdayBreakfastExpenses;
    }

    /**
     * @param Money $firstdayBreakfastExpenses
     */
    public function setFirstdayBreakfastExpenses($firstdayBreakfastExpenses)
    {
        $this->firstdayBreakfastExpenses = $firstdayBreakfastExpenses;
    }

    /**
     * @return Money
     */
    public function getFirstdayLunchExpenses()
    {
        return $this->firstdayLunchExpenses;
    }

    /**
     * @param Money $firstdayLunchExpenses
     */
    public function setFirstdayLunchExpenses($firstdayLunchExpenses)
    {
        $this->firstdayLunchExpenses = $firstdayLunchExpenses;
    }

    /**
     * @return Money
     */
    public function getFirstdayDinnerExpenses()
    {
        return $this->firstdayDinnerExpenses;
    }

    /**
     * @param Money $firstdayDinnerExpenses
     */
    public function setFirstdayDinnerExpenses($firstdayDinnerExpenses)
    {
        $this->firstdayDinnerExpenses = $firstdayDinnerExpenses;
    }

    /**
     * @return Money
     */
    public function getLastdayBreakfastExpenses()
    {
        return $this->lastdayBreakfastExpenses;
    }

    /**
     * @param Money $lastdayBreakfastExpenses
     */
    public function setLastdayBreakfastExpenses($lastdayBreakfastExpenses)
    {
        $this->lastdayBreakfastExpenses = $lastdayBreakfastExpenses;
    }

    /**
     * @return Money
     */
    public function getLastdayLunchExpenses()
    {
        return $this->lastdayLunchExpenses;
    }

    /**
     * @param Money $lastdayLunchExpenses
     */
    public function setLastdayLunchExpenses($lastdayLunchExpenses)
    {
        $this->lastdayLunchExpenses = $lastdayLunchExpenses;
    }

    /**
     * @return Money
     */
    public function getLastdayDinnerExpenses()
    {
        return $this->lastdayDinnerExpenses;
    }

    /**
     * @param Money $lastdayDinnerExpenses
     */
    public function setLastdayDinnerExpenses($lastdayDinnerExpenses)
    {
        $this->lastdayDinnerExpenses = $lastdayDinnerExpenses;
    }

    /**
     * @return float
     */
    public function getWorkingTimeWeekly()
    {
        return $this->workingTimeWeekly;
    }

    /**
     * @param float $workingTimeWeekly
     */
    public function setWorkingTimeWeekly($workingTimeWeekly)
    {
        $this->workingTimeWeekly = $workingTimeWeekly;
    }

    /**
     * @return Money
     */
    public function getAccommodation()
    {
        return $this->accommodation;
    }

    /**
     * @param Money $accommodation
     */
    public function setAccommodation($accommodation)
    {
        $this->accommodation = $accommodation;
    }

    /**
     * @return Money
     */
    public function getPocketMoney()
    {
        return $this->pocketMoney;
    }

    /**
     * @param Money $pocketMoney
     */
    public function setPocketMoney($pocketMoney)
    {
        $this->pocketMoney = $pocketMoney;
    }

    /**
     * @return boolean
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * @param boolean $active
     */
    public function setActive($active)
    {
        $this->active = $active;
    }
}

