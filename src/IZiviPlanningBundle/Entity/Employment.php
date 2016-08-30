<?php

namespace IZiviPlanningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Table(name="employments")
 * @ORM\Entity(repositoryClass="IZiviPlanningBundle\Repository\EmploymentRepository")
 */
class Employment extends UserEntity implements EntityInterface
{
    const FIRST_EMPLOYMENT = 'FIRST';
    const LAST_EMPLOYMENT = 'LAST';
    const EMPLOYMENT_TYPES = array(Employment::FIRST_EMPLOYMENT, Employment::LAST_EMPLOYMENT);

    /**
     * @var Tender
     *
     * @JMS\MaxDepth(1)
     * @ORM\ManyToOne(targetEntity="IZiviPlanningBundle\Entity\Tender")
     * @ORM\JoinColumn(name="tender_id", referencedColumnName="id", nullable=true, onDelete="SET NULL")
     */
    protected $tender;

    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="datetime", length=255, nullable=true)
     */
    protected $start;

    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(type="datetime", length=255, nullable=true)
     */
    protected $end;

    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("draftDate")
     * @ORM\Column(name="draft_date", type="datetime", length=255, nullable=true)
     */
    protected $draftDate;

    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @JMS\SerializedName("employmentType")
     * @ORM\Column(name="employment_type", type="string", length=255, nullable=true)
     */
    protected $employmentType;

    /**
     * @return Tender
     */
    public function getTender()
    {
        return $this->tender;
    }

    /**
     * @param Tender $tender
     */
    public function setTender($tender)
    {
        $this->tender = $tender;
    }

    /**
     * @return string
     */
    public function getStart()
    {
        return $this->start;
    }

    /**
     * @param string $start
     */
    public function setStart($start)
    {
        $this->start = $start;
    }

    /**
     * @return string
     */
    public function getEnd()
    {
        return $this->end;
    }

    /**
     * @param string $end
     */
    public function setEnd($end)
    {
        $this->end = $end;
    }

    /**
     * @return string
     */
    public function getDraft()
    {
        return $this->draft;
    }

    /**
     * @param string $draft
     */
    public function setDraft($draft)
    {
        $this->draft = $draft;
    }

    /**
     * @return string
     */
    public function getEmploymentType()
    {
        return $this->employmentType;
    }

    /**
     * @param string $employmentType
     */
    public function setEmploymentType($employmentType)
    {
        $this->employmentType = $employmentType;
    }
}

