<?php

namespace IZiviPlanningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Table(name="registration_centers")
 * @ORM\Entity(repositoryClass="IZiviPlanningBundle\Repository\RegistrationCenter")
 */
class RegistrationCenter extends Entity implements EntityInterface
{
    /**
     * @var string
     *
     * @JMS\Groups({"List"})
     * @ORM\Column(name="name", type="string", length=50)
     */
    public $name;

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
        $this->$name = $name;
    }


}

