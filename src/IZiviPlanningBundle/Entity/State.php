<?php

namespace IZiviPlanningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Table(name="states")
 * @ORM\Entity(repositoryClass="IZiviPlanningBundle\Repository\StateRepository")
 */
class State extends Entity implements EntityInterface
{
    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(name="shortCode", type="string", length=50)
     */
    public $shortCode;

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


}

